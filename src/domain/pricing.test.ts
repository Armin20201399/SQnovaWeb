import { describe, it, expect } from 'vitest';
import { calculatePrice } from './pricing';

describe('calculatePrice', () => {
  it('calculates base price', () => {
    expect(calculatePrice({ volumeGb: 10, durationMonths: 1, hasGoldProtocol: false })).toBe(45000);
  });

  it('handles higher volume tiers', () => {
    expect(calculatePrice({ volumeGb: 100, durationMonths: 1, hasGoldProtocol: false })).toBe(400000);
  });

  it('handles duration changes', () => {
    expect(calculatePrice({ volumeGb: 25, durationMonths: 3, hasGoldProtocol: false })).toBe(162500);
  });

  it('applies gold protocol pricing correctly', () => {
    expect(calculatePrice({ volumeGb: 10, durationMonths: 1, hasGoldProtocol: true })).toBe(80000);
  });
});