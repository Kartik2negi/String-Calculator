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

  it('returns sum of two numbers', () => {
    expect(add('1,5')).toBe(6);
  });

  it('handles multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });

  it('handles new line as separator', () => {
    expect(add('1\n2,3')).toBe(6);
  });

});
