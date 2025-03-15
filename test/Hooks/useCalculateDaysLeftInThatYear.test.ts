import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';// Update with the correct file path
import {useCalculateDaysLeftInThatYear} from '../../src/Hooks/useCalculateDaysLeft/useCalculateDaysLeftInThatYear';


// Mock the system date properly
const mockDate = (isoDate: string) => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(isoDate));
};

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('useCalculateDaysLeftInThatYear', () => {
  it('should return correct remaining days for a leap year (e.g., 2024, January 1st)', () => {
    mockDate('2024-01-01T00:00:00Z'); // January 1st, 2024 (leap year)
    expect(useCalculateDaysLeftInThatYear()).toBe(365);
  });

  it('should return correct remaining days for a non-leap year (e.g., 2023, January 1st)', () => {
    mockDate('2023-01-01T00:00:00Z'); // January 1st, 2023 (non-leap year)
    expect(useCalculateDaysLeftInThatYear()).toBe(364);
  });

  it('should return correct remaining days for a leap year (e.g., 2024, March 1st)', () => {
    mockDate('2024-03-01T00:00:00Z'); // March 1st, 2024 (leap year)
    expect(useCalculateDaysLeftInThatYear()).toBe(366 - 61);
  });

  it('should return correct remaining days for a non-leap year (e.g., 2023, March 1st)', () => {
    mockDate('2023-03-01T00:00:00Z'); // March 1st, 2023 (non-leap year)
    expect(useCalculateDaysLeftInThatYear()).toBe(365 - 60);
  });

  it('should return 0 days left on the last day of a leap year', () => {
    mockDate('2024-12-31T00:00:00Z');
    expect(useCalculateDaysLeftInThatYear()).toBe(0);
  });

  it('should return 0 days left on the last day of a non-leap year', () => {
    mockDate('2023-12-31T00:00:00Z');
    expect(useCalculateDaysLeftInThatYear()).toBe(0);
  });
});

