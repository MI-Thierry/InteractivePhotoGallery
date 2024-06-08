// String transformation
function StringTransformer(inputStr) {
    let result = "";

    if (inputStr.length % 15 == 0) {
        // Reverse the input string and change it into its ASCII representation
        for (let i = inputStr.length - 1; i >= 0; i--) {
            if (inputStr[i] === " ") continue;
            result += inputStr[i].charCodeAt(0) + " ";
        }
    }
    else if (inputStr.length % 5 == 0) {
        // Change the input string into its ASCII respresentation only
        for (let i = 0; i < inputStr.length; i++) {
            if (inputStr[i] === " ") continue;
            result += inputStr[i].charCodeAt(0) + " ";
        }
    }
    else if (inputStr.length % 3 == 0) {
        // Reverse the input string only.
        for (let i = inputStr.length - 1; i >= 0; i--) {
            if (inputStr[i] === " ") continue;
            result += inputStr[i];
        }
    }
    return result.trim();
}

console.log("String Transformation Challenge.");

// Unit Tests
// Test words with length divisible by 3
const test1In = "Hamburger";
const test1Out = "regrubmaH";
console.assert(StringTransformer(test1In) === test1Out, `Expected: ${test1Out} Actual value: ${StringTransformer(test1In)}`);

// Test words with length divisible by 5
const test2In = "Pizza";
const test2Out = "80 105 122 122 97";
console.assert(StringTransformer(test2In) === test2Out, `Expected: ${test2Out} Actual value: ${StringTransformer(test2In)}`);

// Test words with length divisible by 3
const test3In = "Chocolate Chip Cookie";
const test3Out = "eikooCpihCetalocohC";
console.assert(StringTransformer(test3In) === test3Out, `Expected: ${test3Out} Actual value: ${StringTransformer(test3In)}`);

// Test words with length divisible by 15
const test4In = "Hello, Worlds'!";
const test4Out = "33 39 115 100 108 114 111 87 44 111 108 108 101 72"
console.assert(StringTransformer(test4In) === test4Out, `Expected: ${test4Out} Actual value: ${StringTransformer(test4In)}`);

// Test words with length which isn't divisible by 3, 5 or 15
const test5In = "Hi"
const test5Out = "";
console.assert(StringTransformer(test5In) === test5Out, `Expected: ${test5Out} Actual value: ${StringTransformer(test5In)}`);