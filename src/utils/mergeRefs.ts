import type { Ref, RefCallback } from 'react';

/** Compose object and callback refs, including React 19 cleanup callbacks. */
export function mergeRefs<T = any>(
  refs: Array<Ref<T> | undefined>
): RefCallback<T> {
  return (value) => {
    const cleanups = refs.map((ref) => {
      if (typeof ref === 'function') {
        const cleanup = ref(value);
        return () => {
          if (typeof cleanup === 'function') cleanup();
          else ref(null);
        };
      }
      if (ref != null) {
        ref.current = value;
        return () => {
          ref.current = null;
        };
      }
      return undefined;
    });
    if (value !== null) {
      return () => cleanups.forEach((cleanup) => cleanup?.());
    }
    return undefined;
  };
}

export function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);
    ourEventHandler?.(event);
  };
}
