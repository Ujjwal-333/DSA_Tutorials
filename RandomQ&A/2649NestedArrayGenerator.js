/**
 * @param {Array} arr
 * @return {Generator<number>}
 */
var inorderTraversal = function*(arr) {
    // Array ke har ek element par loop chalayenge (left to right)
    for (let item of arr) {
        // Check karenge ki current item ek array hai ya ek integer
        if (Array.isArray(item)) {
            // Agar array hai, toh uske upar dobara yehi generator apply karenge (`yield*` delegation ke liye)
            yield* inorderTraversal(item);
        } else {
            // Agar integer hai, toh seedha yield kar denge
            yield item;
        }
    }
};

// ==========================================
// VS Code mein test karne ke liye examples
// ==========================================
function runTest() {
    const arr = [[[6]], [1, 3], []];
    const gen = inorderTraversal(arr);
    const result = [];

    // Ek-ek karke values extract karenge jab tak generator finish na ho jaye
    let nextVal = gen.next();
    while (!nextVal.done) {
        result.push(nextVal.value);
        nextVal = gen.next();
    }

    console.log("Output for arr = [[[6]],[1,3],[]]:", result); 
    // Expected Output: [6, 1, 3]
}

runTest();