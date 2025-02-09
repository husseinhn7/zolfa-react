function twoSum(nums, target) {
    const numIndices = {}; // Create an object to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target + nums[i]; // Calculate the complement of the current number

        // Check if the current number is already in the object
        if (numIndices.hasOwnProperty(nums[i])) {
            // If it is, return the indices of the current number and the complement
            return [numIndices[nums[i]], i];
        }

        // Otherwise, store the index of the current number in the object
        numIndices[complement] = i;
    }

    // If no solution is found, return a default array
    return [-1, -1];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]