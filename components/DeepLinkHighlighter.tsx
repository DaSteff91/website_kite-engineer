"use client";

import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";

const MAX_WAIT_MS = 500;
const FALLBACK_WORD_COUNT = 8;

type HighlightRange = { start: number; length: number };

type PointerHandler = (event: PointerEvent) => void;

function parsePosition(raw: string | null): HighlightRange | null {
  if (!raw) {
    return null;
  }
  const [startRaw, lengthRaw] = raw.split(":");
  const start = Number.parseInt(startRaw ?? "", 10);
  const length = Number.parseInt(lengthRaw ?? "", 10);
  if (!Number.isFinite(start) || !Number.isFinite(length)) {
    return null;
  }
  return {
    start: Math.max(0, start),
    length: Math.max(0, length),
  };
}

function createRangeFromOffsets(element: HTMLElement, range: HighlightRange): Range | null {
  const { start, length } = range;
  if (length <= 0) {
    return null;
  }
  const endOffset = start + length;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let currentOffset = 0;
  let rangeStartNode: Text | null = null;
  let rangeStartOffset = 0;
  let rangeEndNode: Text | null = null;
  let rangeEndOffset = 0;

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const textLength = node.textContent?.length ?? 0;
    if (!rangeStartNode && currentOffset + textLength >= start) {
      rangeStartNode = node;
      rangeStartOffset = Math.max(0, start - currentOffset);
    }
    if (rangeStartNode && currentOffset + textLength >= endOffset) {
      rangeEndNode = node;
      rangeEndOffset = Math.max(0, endOffset - currentOffset);
      break;
    }
    currentOffset += textLength;
  }

  if (!rangeStartNode) {
    return null;
  }

  if (!rangeEndNode) {
    rangeEndNode = rangeStartNode;
    const textLength = rangeStartNode.textContent?.length ?? 0;
    rangeEndOffset = Math.min(textLength, rangeStartOffset + length);
  }

  const domRange = document.createRange();
  domRange.setStart(
    rangeStartNode,
    Math.min(rangeStartOffset, rangeStartNode.textContent?.length ?? 0),
  );
  domRange.setEnd(
    rangeEndNode,
    Math.min(rangeEndOffset, rangeEndNode.textContent?.length ?? 0),
  );

  if (domRange.collapsed) {
    return null;
  }

  return domRange;
}

function createRangeFromWords(element: HTMLElement, wordCount: number): Range | null {
  if (wordCount <= 0) {
    return null;
  }
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let remaining = wordCount;
  let startNode: Text | null = null;
  let startOffset = 0;
  let endNode: Text | null = null;
  let endOffset = 0;

  while (walker.nextNode() && remaining > 0) {
    const node = walker.currentNode as Text;
    const text = node.textContent ?? "";
    if (!text.trim()) {
      continue;
    }

    for (const match of text.matchAll(/\S+/g)) {
      if (!startNode) {
        startNode = node;
        startOffset = match.index ?? 0;
      }
      endNode = node;
      endOffset = (match.index ?? 0) + match[0].length;
      remaining -= 1;
      if (remaining <= 0) {
        break;
      }
    }
  }

  if (!startNode || !endNode) {
    return null;
  }

  const range = document.createRange();
  range.setStart(startNode, startOffset);
  range.setEnd(endNode, endOffset);
  if (range.collapsed) {
    return null;
  }
  return range;
}

function wrapRange(range: Range): HTMLElement | null {
  if (range.collapsed) {
    return null;
  }
  const mark = document.createElement("mark");
  mark.className = "ke-highlight";
  const contents = range.extractContents();
  mark.appendChild(contents);
  range.insertNode(mark);
  return mark;
}

export function DeepLinkHighlighter() {
  const searchParams = useSearchParams();
  const highlightId = searchParams?.get("h") ?? null;
  const highlightField = searchParams?.get("f") ?? null;
  const highlightPos = searchParams?.get("pos") ?? null;

  const position = useMemo(() => parsePosition(highlightPos), [highlightPos]);

  const markRef = useRef<HTMLElement | null>(null);
  const handlerRef = useRef<PointerHandler | null>(null);
  const rafRef = useRef<number | null>(null);

  const clearHighlight = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const mark = markRef.current;
    if (mark && mark.parentNode) {
      const parent = mark.parentNode;
      while (mark.firstChild) {
        parent.insertBefore(mark.firstChild, mark);
      }
      parent.removeChild(mark);
    }
    markRef.current = null;
    if (handlerRef.current) {
      document.removeEventListener("pointerdown", handlerRef.current);
      handlerRef.current = null;
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("ke-smooth");
    return () => {
      root.classList.remove("ke-smooth");
    };
  }, []);

  useEffect(() => {
    clearHighlight();

    if (!highlightId || !highlightField || !position) {
      return;
    }

    let cancelled = false;
    const startTime = performance.now();

    const attemptHighlight = () => {
      if (cancelled) {
        return;
      }
      const element = document.getElementById(highlightId);
      if (element instanceof HTMLElement) {
        try {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        } catch {
          element.scrollIntoView({ block: "center" });
        }

        const applyRange = (range: Range | null) => {
          if (!range) {
            return false;
          }
          try {
            const mark = wrapRange(range);
            if (!mark) {
              return false;
            }
            markRef.current = mark;
            const handler: PointerHandler = (event) => {
              const target = event.target as Node | null;
              if (mark && target && !mark.contains(target)) {
                clearHighlight();
              }
            };
            handlerRef.current = handler;
            document.addEventListener("pointerdown", handler, { passive: true });
            return true;
          } catch {
            return false;
          }
        };

        const mainRange = createRangeFromOffsets(element, position);
        const applied = applyRange(mainRange) || applyRange(createRangeFromWords(element, FALLBACK_WORD_COUNT));
        if (!applied) {
          clearHighlight();
        }
        return;
      }

      if (performance.now() - startTime < MAX_WAIT_MS) {
        rafRef.current = requestAnimationFrame(attemptHighlight);
      }
    };

    rafRef.current = requestAnimationFrame(attemptHighlight);

    return () => {
      cancelled = true;
      clearHighlight();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightId, highlightField, position?.start, position?.length]);

  return null;
}
