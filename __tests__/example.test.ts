import { add, subtract } from '../src/utils';

describe('Utils Tests', () => {
    it('should correctly add two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });

    it('should correctly subtract two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(0, 4)).toBe(-4);
    });
});
