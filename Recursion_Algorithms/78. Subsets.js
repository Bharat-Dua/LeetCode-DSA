//* Recursively approach

//* T- O(2^n*n) S-O(2^n*n)

function powerSet(nums) {
  let output = [];
  function helper(nums, i, subset) {
    if (i === nums.length) return output.push(subset.slice());
    //don't add
    helper(nums, i + 1, subset);
    // do add
    subset.push(nums[i]);
    helper(nums, i + 1, subset);
    subset.pop();
  }
  helper(nums, 0, []);
  return output;
}

console.log(powerSet([1, 2, 3]));
