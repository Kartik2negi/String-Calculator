import { describe, it, expect } from "vitest";
import { add } from "./stringCalculator.js";

describe('String Calculator', () => {
  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  it('returns the number for a single number', () => {
    expect(add('1')).toBe(1);
    expect(add('42')).toBe(42);
  });
});
