// # Intuition
// The primary goal of memoization is to optimize function execution by storing the results of previous function calls. If the function is called again with the exact same inputs, we can instantly return the cached result instead of re-executing it. We also need a mechanism to track how many times the original function is actually invoked.

// # Approach
// 1. **Cache Storage**: Initialize a `Map` named `cache` to store unique argument combinations as keys and their computed results as values.
// 2. **Argument Serialization**: Use `JSON.stringify(args)` to convert the incoming arguments array into a unique string key. This ensures that different argument orders (like `[3, 2]` vs `[2, 3]`) are treated as separate, distinct cache entries.
// 3. **Call Tracking**: Maintain a `callCount` variable that increments only when there is a cache miss (i.e., when the original function `fn` is actually executed).
// 4. **Method Attachment**: Attach a `getCallCount` method to the returned memoized function to expose the total number of actual function executions.

// # Complexity
// - Time complexity: 
//   - `O(1)` on average for cache lookups and insertions. 
//   - `O(K)` for stringifying the arguments, where `K` is the number of arguments.

// - Space complexity: 
//   - `O(N)`, where `N` is the number of unique inputs stored in the cache.

function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoizedFn = function(...args) {
        const key = JSON.stringify(args);
        
        // Return cached result if it exists
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        // Otherwise, increment count, call original function, and cache the result
        callCount++;
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }

    memoizedFn.getCallCount = function() {
        return callCount;
    }

    return memoizedFn;
}