// # Intuition
// To maintain state across multiple function calls without using global variables, we can use a **closure**. By keeping the initial value `init` and a mutable state variable `current` inside the `createCounter` scope, we can return an object with methods that safely modify and return this state.

// # Approach
// 1. Initialize a variable `current` with the given `init` value.
// 2. Return an object with three methods:
//    - `increment()`: Increases `current` by 1 (`++current`) and returns it.
//    - `decrement()`: Decreases `current` by 1 (`--current`) and returns it.
//    - `reset()`: Resets `current` back to the original `init` value and returns it.

// # Complexity
// - Time complexity: 
//   - $O(1)$ for each method (`increment`, `decrement`, and `reset`), because they perform simple arithmetic and assignment operations.

// - Space complexity: 
//   - $O(1)$ auxiliary space, as it only stores a few primitive variables (`init` and `current`) in memory.



var createCounter = function(init) {
    let current = init;

    return {
        increment: function() {
            return ++current;
        },
        decrement: function() {
            return --current;
        },
        reset: function() {
            current = init;
            return current;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */