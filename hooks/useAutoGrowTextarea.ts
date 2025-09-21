import { useEffect, useRef } from 'react';

export const useAutoGrowTextarea = (value: string): React.RefObject<HTMLTextAreaElement> => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to get the correct scrollHeight
      textareaRef.current.style.height = 'auto';
      // Set new height based on content
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        // Optional: Set max height (e.g., 50vh in pixels)
        window.innerHeight * 0.5
      )}px`;
    }
  }, [value]);

  return textareaRef as React.RefObject<HTMLTextAreaElement>;
};
