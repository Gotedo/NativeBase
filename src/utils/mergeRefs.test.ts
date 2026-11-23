import { mergeRefs } from './mergeRefs';

describe('React 19 ref lifecycles', () => {
  it('cleans up callbacks and clears object refs on unmount', () => {
    const node = { focus: jest.fn() };
    const cleanup = jest.fn();
    const callback = jest.fn(() => cleanup);
    const legacyCallback = jest.fn();
    const objectRef: { current: typeof node | null } = { current: null };
    const ref = mergeRefs([objectRef, callback, legacyCallback]);
    const unmount = ref(node);
    expect(objectRef.current).toBe(node);
    expect(callback).toHaveBeenCalledWith(node);
    expect(legacyCallback).toHaveBeenCalledWith(node);
    if (typeof unmount !== 'function') throw new Error('Missing ref cleanup');
    unmount();
    expect(objectRef.current).toBeNull();
    expect(cleanup).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(legacyCallback).toHaveBeenLastCalledWith(null);
  });
});
