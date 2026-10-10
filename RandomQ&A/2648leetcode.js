/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    // Fibonacci series ki shuruat 0 aur 1 se hoti hai
    let a = 0;
    let b = 1;
    
    // Infinite loop chalayenge kyunki generator on-demand values yield karta hai
    while (true) {
        yield a; // Current value ko return/yield karega aur yahi ruk jayega jab tak next() call na ho
        
        // Agla number calculate karne ke liye values shift karo
        let next = a + b;
        a = b;
        b = next;
    }
};

// ==========================================
// VS Code mein test karne ke liye examples
// ==========================================
function runTest() {
    const gen = fibGenerator();
    const callCount = 5;
    const result = [];

    for (let i = 0; i < callCount; i++) {
        result.push(gen.next().value);
    }

    console.log("Output for callCount = 5:", result); 
    // Expected Output: [0, 1, 1, 2, 3]
}

runTest();