// # Intuition
// Instead of flattening the entire multi-dimensional array into a new array upfront (which consumes extra memory), we can use a **Generator function** (`function*`). This allows us to traverse and yield elements **lazily** on-the-fly, one by one, whenever `.next()` is called.

// # Approach
// 1. Define a generator function `inorderTraversal(arr)` that loops through each element in the array using a `for...of` loop.
// 2. For each `item`, check if it is an array using `Array.isArray(item)`.
// 3. If it is a nested array, use **`yield*`** to recursively delegate the iteration to the sub-generator.
// 4. If it is a regular integer, simply **`yield`** the integer.
// 5. This approach avoids creating any intermediate flattened arrays, keeping memory usage optimal.

// # Complexity
// - Time complexity: 
//   - $O(N)$, where $N$ is the total number of integers across all nested arrays. Every element is visited exactly once.

// - Space complexity: 
//   - $O(D)$, where $D$ is the maximum nesting depth of the array. This accounts only for the recursion call stack of the generator, avoiding the $O(N)$ space needed to store a flattened array.


var inorderTraversal = function*(arr) {
    for (const item of arr) {
        if (Array.isArray(item)) {
            // Recursively yield from the nested array
            yield* inorderTraversal(item);
        } else {
            // Yield the integer value
            yield item;
        }
    }
};

/**
 * const generator = inorderTraversal([[[6]], [1, 3], []]);
 * generator.next().value; // 6
 * generator.next().value; // 1
 * generator.next().value; // 3
 */