import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useSectionNavigation } from './useSectionNavigation';
import { renderHook, act } from '@testing-library/react';

describe('useSectionNavigation', () => {
  beforeEach(() => {
    // شبیه‌سازی window.matchMedia چون در jsdom وجود ندارد
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // قدیمی
      removeListener: vi.fn(), // قدیمی
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it('scrolls to the correct element', () => {
    document.body.innerHTML = '<div id="test-section"></div>';
    const { result } = renderHook(() => useSectionNavigation());

    act(() => {
      result.current.navigate('test-section');
    });

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
  });
});