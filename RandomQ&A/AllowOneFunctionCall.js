// # Intuition
// To ensure that a function is called at most once, we can use a **closure** to keep track of a boolean flag (or a state variable) that indicates whether the function has already been executed. We also store a variable to remember if it was called and return its result on the first call, and `undefined` on all subsequent calls.

// # Approach
// 1. Initialize a boolean flag `isCalled` to `false` and a variable `result` to store the output of the first execution.
// 2. Return a new wrapper function using the rest parameter syntax `(...args)` to accept any number of arguments.
// 3. Inside the wrapper function:
//    - Check if `isCalled` is `false`.
//    - If it is `false`, set `isCalled = true`, execute the original function `fn(...args)`, save its output in `result`, and return it.
//    - If `isCalled` is `true`, simply return `undefined` without executing `fn` again.

// # Complexity
// - Time complexity: 
//   - $O(1)$ for each call, as it only checks a boolean flag and executes the function once.

// - Space complexity: 
//   - $O(1)$ auxiliary space, as it only maintains a couple of state variables (`isCalled` and `result`) in the closure.


var once = function(fn) {
    let isCalled = false;
    let result;

    return function(...args) {
        if (!isCalled) {
            isCalled = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    }
};

/**
 * let fn = (a, b, c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1, 2, 3); // 6
 * onceFn(2, 3, 6); // returns undefined without calling fn
 */