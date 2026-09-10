/*
# Intuition

We need to apply the given function `fn` to every element of the
array sequentially.

The result of the previous operation becomes the accumulator
for the next operation.

So, we start with `init` and keep updating the result for
each element.


# Approach

1. Initialize a variable `result` with `init`.
2. Traverse the array using a for loop.
3. For each element, call `fn(result, nums[i]).
4. Store the returned value back in `result`.
5. After processing all elements, return `result`.

If the array is empty, the loop will not execute, so `result`
will remain equal to `init`.


# Complexity

Time Complexity: O(n)

We iterate through the array exactly once.

Space Complexity: O(1)

We only use one extra variable `result`.
*/



var reduce = function (nums, fn, init) {
    // Accumulator starts with the initial value
    let result = init;

    // Process each element one by one
    for (let i = 0; i < nums.length; i++) {
        // Pass previous result and current element to fn
        result = fn(result, nums[i]);
    }

    // Return the final accumulated result
    return result;
};