//* T-O(n*n!) S-O(n*n!)

function allPermutations(arr) {
  let permutation = [];
  //helper
  function helper(num, i) {
    //condition
    if (i === num.length - 1) return permutation.push(num.slice());
    for (let j = i; j < num.length; j++) {
      //swap
      [num[i], num[j]] = [num[j], num[i]];
      //recursive
      helper(num, i + 1);
      //swap
      [num[i], num[j]] = [num[j], num[i]];
    }
  }
  helper(arr, 0);
  return permutation;
}
console.log(allPermutations([1, 2, 3]));
