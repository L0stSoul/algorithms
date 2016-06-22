module.exports = function(numbers, sum) {
    var result = [];

    step(numbers, sum, 0, 0, [], result);

    return result;
};

function step(numbers, sum, currentSum, index, state, result) {
    if (currentSum === sum) {
        result.push(state);
        return;
    }

    if (currentSum > sum || index === numbers.length) {
        return;
    }

    step(numbers, sum, currentSum + numbers[index], index + 1, state.concat(numbers[index]), result);
    step(numbers, sum, currentSum, index + 1, state, result);
}
