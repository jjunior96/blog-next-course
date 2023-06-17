import { act, renderHook } from '@testing-library/react';

import { useMainNav } from './useMainNav';

describe('useMainNav', () => {
  it('should return default values correctly', () => {
    const { result } = renderHook(() => useMainNav());

    const { isOpenMenu, handleToggleMenu } = result.current;

    expect(isOpenMenu).toBe(false);
    expect(typeof handleToggleMenu).toBe('function');
  });

  it('should change isOpenMenu when handleToggleMenu is called', () => {
    const { result } = renderHook(() => useMainNav());

    act(() => {
      result.current.handleToggleMenu();
    });

    expect(result.current.isOpenMenu).toBe(true);

    act(() => {
      result.current.handleToggleMenu();
    });

    expect(result.current.isOpenMenu).toBe(false);
  });
});
