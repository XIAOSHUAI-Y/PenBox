// import { useEffect } from 'react';

// export function useListener(node: any, eventName: string, callback: any, condition: boolean) {
//   useEffect(() => {
//     if (condition) {
//       window.addEventListener(eventName, callback, false);

//       return () => {
//         window.removeEventListener(eventName, callback, false);
//       }
//     }
//   }, [condition]);
// }

import { useEffect } from 'react';

export function useListener(
  target: Window | HTMLElement | Document,
  event: string,
  listener: EventListenerOrEventListenerObject,
  condition = true
) {
  useEffect(() => {
    if (condition && target) {
      target.addEventListener(event, listener);
      return () => {
        target.removeEventListener(event, listener);
      };
    }
  }, [condition, event, listener, target]);
}

export function getScrollParent(node: HTMLElement | null): HTMLElement | Window {
  if (node == null) {
    return window;
  }

  const overflowY = window.getComputedStyle(node).overflowY;
  const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

  if (isScrollable && node.scrollHeight > node.clientHeight) {
    return node;
  }

  return getScrollParent(node.parentElement);
}