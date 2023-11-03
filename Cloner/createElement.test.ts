import Cloner from './index';
import { describe, test, expect } from 'vitest';

describe('createElement', () => {
  test("doesn't crash", () => {
    expect(() => Cloner.createElement('div', { id: 'div' })).not.toThrowError();
  });
});
