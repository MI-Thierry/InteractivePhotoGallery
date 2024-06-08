// This function finds contiguous sub array of array that have sum equal to targetSum
function ArrayInspect(array, targetSum) {
    // Inputs validation
    if (array.length < 1 || array.length > 100000) {
        throw "Array length must be between 1 and 100,000";
    }
    for (let num of array) {
        if (num < -1000000000 || num > 1000000000) {
            throw "Array elements must be between -1,000,000,000 and 1,000,000,000";
        }
    }
    if (targetSum < -1000000000 || targetSum > 1000000000) {
        throw "Target sum must be between -1,000,000,000 and 1,000,000,000";
    }

    // Check contiguous sub-array with sum equal to targetSum
    let currentSum = 0;
    let start = 0;
    for (let i = 0; i < array.length; i++) {
        currentSum += array[i];
        while (currentSum > targetSum) {
            currentSum -= array[start];
            start++;
        }
        if (currentSum === targetSum) {
            return true;
        }
    }
    return false;
}

console.log("Array Manipulation Challenge.");

// Unit Tests
// Target sum for all tests
let testTargetSum = 10;

// Test value that contains contiguous subarray with sum which is equal to testTargetSum
const test1Array = [1, 2, 3, 4, 5,];
const test1Out = true;
console.assert(ArrayInspect(test1Array, testTargetSum) === test1Out, `Expected: ${test1Out} Actual value: ${ArrayInspect(test1Array, testTargetSum)}`);

// Test value that don't contain contiguous subarray with sum which is equal to testTargetSum
const test2Array = [1, 2, 3, 6, 5,];
const test2Out = false;
console.assert(ArrayInspect(test2Array, testTargetSum) === test2Out, `Expected: ${test2Out} Actual value: ${ArrayInspect(test2Array, testTargetSum)}`);

// Test from the challenge
testTargetSum = 17
const test3Array = [4, 2, 7, 1, 9, 5];
const test3Out = true;
console.assert(ArrayInspect(test3Array, testTargetSum) === test3Out, `Expected: ${test3Out} Actual value: ${ArrayInspect(test3Array, testTargetSum)}`);
