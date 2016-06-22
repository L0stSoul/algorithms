var assert = require('chai').assert;
var subsetsum = require('..');

describe('subset sum brute force algorithm', function() {
    it('should work correctly if solution exists', function() {
        /* test case from https://people.sc.fsu.edu/~jburkardt/datasets/subset_sum/subset_sum.html */
        var result = subsetsum([15, 22, 14, 26, 32, 9, 16, 8], 53);
        assert.lengthOf(result, 3);
        assert.sameDeepMembers(result, [
            [15, 22, 16],
            [22, 14, 9, 8],
            [15, 14, 16, 8]
        ]);
    });

    it('should work correctly with negative numbers', function() {
        var result = subsetsum([10, -1, -2, 12], 9);
        assert.lengthOf(result, 2);
        assert.sameDeepMembers(result, [
            [10, -1],
            [-1, -2, 12]
        ]);
    });

    it('should return 0-length array if there is no solution', function() {
        var result = subsetsum([15, 22, 14, 26, 32678, 9, 16, 8], 530);
        assert.lengthOf(result, 0);
    });

    it('should return 0-length array if there is empty set of input numbers', function() {
        var result = subsetsum([], 530);
        assert.lengthOf(result, 0);
    });

    /* assumptions */

    it('duplicate results is okay', function() {
        /* if not, then we have to implements ome hashing function, for arrays */
        var result = subsetsum([1, 1, 2], 3);
        assert.lengthOf(result, 2);
    });

    it('should return result with empty set in it if sum is 0', function() {
        var result = subsetsum([0, 0, 2], 0);
        assert.lengthOf(result, 1);
        assert.sameDeepMembers(result, [ [] ]);
    });
});
