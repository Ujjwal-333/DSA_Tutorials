/*
# Intuition

We need to add a `groupBy` method to all arrays.

The function `fn` gives us a key for every element.
Elements having the same key should be stored together
inside the same array.

For example:

[1, 2, 3, 4, 5, 6]

If fn returns whether the number is greater than 5:

1  -> "false"
2  -> "false"
...
6  -> "true"

So the result becomes:

{
    "false": [1, 2, 3, 4, 5],
    "true": [6]
}


# Approach

1. Add a `groupBy` method to `Array.prototype`.
2. Create an empty object called `result` to store the groups.
3. Loop through every element of the array.
4. Use `fn(item)` to calculate the key for the current item.
5. If the key does not exist in `result`, create an empty array for it.
6. Push the current item into the corresponding group.
7. Return the final `result` object.

Because we process elements from left to right and use `push()`,
the order of elements inside each group remains the same as
their original order in the array.


# Complexity

Time Complexity: O(n)

We visit every element exactly once.

Space Complexity: O(n)

In the worst case, every element can have a different key,
so the result object can contain all `n` elements.


# Code
*/


/**
 * @param {Function} fn
 * @return {Object}
 */

Array.prototype.groupBy = function (fn) {
    // Object to store the grouped elements
    const result = {};

    // Traverse every element of the array
    for (let i = 0; i < this.length; i++) {
        const item = this[i];

        // Get the key using the callback function
        const key = fn(item);

        // If this key does not exist, create an empty array
        if (!result[key]) {
            result[key] = [];
        }

        // Add the current item to its corresponding group
        result[key].push(item);
    }

    // Return the grouped object
    return result;
};