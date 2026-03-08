import { describe, it, expect } from 'vitest';

/**
 * Sample test file for the portfolio web application
 * This demonstrates basic testing patterns using Vitest
 */

describe('Portfolio Web App', () => {
  describe('Basic Functionality', () => {
    it('should have a defined test suite', () => {
      expect(true).toBe(true);
    });

    it('should calculate simple arithmetic', () => {
      const sum = (a: number, b: number) => a + b;
      expect(sum(2, 3)).toBe(5);
    });

    it('should handle string operations', () => {
      const greeting = (name: string) => `Hello, ${name}!`;
      expect(greeting('World')).toBe('Hello, World!');
    });
  });

  describe('Array Operations', () => {
    it('should filter array items correctly', () => {
      const numbers = [1, 2, 3, 4, 5];
      const evenNumbers = numbers.filter((n) => n % 2 === 0);
      expect(evenNumbers).toEqual([2, 4]);
    });

    it('should map array items', () => {
      const items = [1, 2, 3];
      const doubled = items.map((x) => x * 2);
      expect(doubled).toEqual([2, 4, 6]);
    });
  });

  describe('Object Operations', () => {
    it('should create and validate objects', () => {
      const user = {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'developer',
      };

      expect(user.name).toBe('John Doe');
      expect(user.role).toBe('developer');
    });

    it('should handle object merging', () => {
      const defaults = { theme: 'light', language: 'en' };
      const overrides = { theme: 'dark' };
      const config = { ...defaults, ...overrides };

      expect(config.theme).toBe('dark');
      expect(config.language).toBe('en');
    });
  });

  describe('Type Safety', () => {
    it('should enforce TypeScript types', () => {
      interface Portfolio {
        name: string;
        skills: string[];
        experience: number;
      }

      const portfolio: Portfolio = {
        name: 'Developer',
        skills: ['TypeScript', 'React', 'Node.js'],
        experience: 5,
      };

      expect(portfolio.skills).toHaveLength(3);
      expect(portfolio.experience).toBeGreaterThan(0);
    });
  });

  describe('Async Operations', () => {
    it('should handle promises', async () => {
      const fetchData = async () => {
        return new Promise<string>((resolve) => {
          setTimeout(() => resolve('data'), 10);
        });
      };

      const result = await fetchData();
      expect(result).toBe('data');
    });

    it('should handle async/await', async () => {
      const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

      const start = Date.now();
      await delay(50);
      const elapsed = Date.now() - start;

      expect(elapsed).toBeGreaterThanOrEqual(50);
    });
  });
});
