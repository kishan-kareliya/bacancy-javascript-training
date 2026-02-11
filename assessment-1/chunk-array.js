/*
 JS: Chunk an Array

 * Write a function `chunkArray(arr, size)` that:
 - Splits an array into smaller arrays (chunks) of a given size
 - Returns a new array containing these chunks
 - Uses `reduce`
 - Uses `slice` OR index-based logic
 Does NOT use loops (for, while)

 Example:
 Input:  ([1, 2, 3, 4, 5], 2)
 Output: [[1, 2], [3, 4], [5]]
*/

function chunkArray(arr, size) {
    if (size <= 0) return [];

    let ans = [];
    let start = 0;
    do {
        ans.push(arr.slice(start, start + size))
        start = start + size;
    } while (start < arr.length);
    return ans;
}

let output = chunkArray([1, 2, 3, 4, 5], 2)
console.log(output)