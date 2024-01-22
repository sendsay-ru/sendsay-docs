import { useEffect } from 'react';

type MutatingElements = { id: string; callback: (element: HTMLElement) => void };

export const useMutationObserver = (elements: MutatingElements[]) => {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            elements.find((item) => item.id === node.id)?.callback(node);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true });

    return () => {
      observer.disconnect();
    };
  }, [elements]);
};
