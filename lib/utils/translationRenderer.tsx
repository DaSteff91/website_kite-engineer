"use client";

import React from "react";

export type RichTranslationNode =
  | { type: "text"; value: string }
  | { type: "strong"; value: string }
  | { type: "em"; value: string }
  | { type: "abbr"; value: string; title?: string }
  | { type: "i"; value: string }
  | { type: "u"; value: string }
  | { type: "s"; value: string }
  | { type: "sup"; value: string }
  | { type: "sub"; value: string };

export function renderTranslation(translation: string): React.ReactNode {
  try {
    const parsed = JSON.parse(translation);

    if (Array.isArray(parsed)) {
      return renderRichText(parsed as RichTranslationNode[]);
    }

    return translation;
  } catch {
    return translation;
  }
}

function renderRichText(nodes: RichTranslationNode[]): React.ReactNode {
  return nodes.map((node, index) => {
    switch (node.type) {
      case "text":
        return <span key={index}>{node.value}</span>;

      case "strong":
        return <strong key={index}>{node.value}</strong>;

      case "em":
        return <em key={index}>{node.value}</em>;

      case "abbr":
        return (
          <abbr key={index} title={node.title || ""}>
            {node.value}
          </abbr>
        );

      case "i":
        return <i key={index}>{node.value}</i>;

      case "u":
        return <u key={index}>{node.value}</u>;

      case "s":
        return <s key={index}>{node.value}</s>;

      case "sup":
        return <sup key={index}>{node.value}</sup>;

      case "sub":
        return <sub key={index}>{node.value}</sub>;
    }
  });
}
