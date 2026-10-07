// # Intuition
// To generate an infinite Fibonacci sequence efficiently without recurring or keeping a large array in memory, we can use a **Generator function** (`function*`). We can keep track of the last two numbers of the sequence using two variables and yield them one by one inside an infinite loop.

// # Approach
// 1. Initialize two variables, `a = 0` and `b = 1`, which represent the first two numbers of the Fibonacci sequence.
// 2. **Yield** the initial numbers (`0` and `1`) sequentially on the first two calls.
// 3. Enter an infinite `while (true)` loop to compute subsequent numbers.
// 4. In each iteration, calculate the `next` value as `a + b`, **yield** it, and then shift the window forward (`a = b` and `b = next`).

// # Complexity
// - Time complexity: 
//   - $O(1)$ per `.next()` call, since it only requires basic arithmetic operations and variable reassignment.

// - Space complexity: 
//   - $O(1)$ auxiliary space, as it only keeps track of a few state variables (`a`, `b`, and `next`) regardless of how many times the generator is called.



var fibGenerator = function*() {
    let a = 0;
    let b = 1;

    // Yield the first two numbers
    yield a;
    yield b;

    // Continuously generate and yield subsequent Fibonacci numbers
    while (true) {
        let next = a + b;
        yield next;
        a = b;
        b = next;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 * gen.next().value; // 1
 */