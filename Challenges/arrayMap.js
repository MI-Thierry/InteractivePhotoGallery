// This function finds contiguous sub array of array that have sum equal to target
function ArrayInspect(array, target) {
    // Inputs validation
    if (array.length < 1 || array.length > 100000) {
        throw "Array length must be between 1 and 100,000";
    }
    for (let num of array) {
        if (num < -1000000000 || num > 1000000000) {
            throw "Array elements must be between -1,000,000,000 and 1,000,000,000";
        }
    }
    if (target < -1000000000 || target > 1000000000) {
        throw "Target sum must be between -1,000,000,000 and 1,000,000,000";
    }

    // Check contiguous sub array with sum equalt to target
    let sum = 0;
    let start = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        while (sum > target) {
            sum -= array[start];
            start++;
        }
        if (sum === target) {
            return true;
        }
    }
    return false;
}

console.log("Array Manipulation Challenge.");

// Unit Tests
// Target sum for all tests
let testTarget = 10;

// Test value that contains contiguous subarray with sum which is equal to testTarget
const test1Array = [1, 2, 3, 4, 5,];
const test1Out = true;
console.assert(ArrayInspect(test1Array, testTarget) === test1Out, `Expected: ${test1Out} Actual value: ${ArrayInspect(test1Array, testTarget)}`);

// Test value that don't contain contiguous subarray with sum which is equal to testTarget
const test2Array = [1, 2, 3, 6, 5,];
const test2Out = false;
console.assert(ArrayInspect(test2Array, testTarget) === test2Out, `Expected: ${test2Out} Actual value: ${ArrayInspect(test2Array, testTarget)}`);

// Test from the challenge
testTarget = 17
const test3Array = [4, 2, 7, 1, 9, 5];
const test3Out = true;
console.assert(ArrayInspect(test3Array, testTarget) === test3Out, `Expected: ${test3Out} Actual value: ${ArrayInspect(test3Array, testTarget)}`);
