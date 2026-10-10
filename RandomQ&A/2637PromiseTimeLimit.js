/**
 * @param {Function} fn - Ye wo asynchronous function hai jisko time limit mein run karna hai.
 * @param {number} t - Ye time limit hai milliseconds mein (e.g., 50ms, 150ms).
 * @return {Function} - Ek naya function return karega jo time-limited hoga.
 */
var timeLimit = function(fn, t) {
    // Ye wrapper function kitne bhi arguments (...args) accept kar sakta hai
    return async function(...args) {
        return new Promise((resolve, reject) => {
            
            // 1. Timer set karo: Agar function 't' milliseconds ke andar khatam nahi hua,
            // toh ye timer trigger hoga aur Promise ko "Time Limit Exceeded" ke sath reject kar dega.
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            
            // 2. Original function ko uske arguments ke sath execute karo
            fn(...args)
                .then((res) => {
                    // Agar function time limit se pehle successfully resolve ho gaya:
                    clearTimeout(timer); // Timer ko rok do taaki wo faltu mein run na ho
                    resolve(res);        // Result ke sath promise resolve kar do
                })
                .catch((err) => {
                    // Agar function ke andar koi error aa gaya (jaise Example 4 mein throw "Error"):
                    clearTimeout(timer); // Timer ko rok do
                    reject(err);         // Original error ke sath reject kar do
                });
        });
    };
};

// ==========================================
// VS Code mein test karne ke liye examples
// ==========================================
async function runTests() {
    console.log("--- Tests Start Ho Rahe Hain ---");

    // Example 1: Time limit cross ho jayegi (fn 100ms leta hai, limit sirf 50ms hai)
    try {
        const fn1 = async (n) => {
            await new Promise(res => setTimeout(res, 100)); // 100ms delay
            return n * n;
        };
        const limited1 = timeLimit(fn1, 50); // 50ms ka time limit
        await limited1(5);
    } catch (err) {
        // Ye block chalega aur output "Time Limit Exceeded" dega
        console.log("Example 1 Result (Rejected):", err);
    }

    // Example 2: Time limit ke andar kaam ho jayega (fn 100ms leta hai, limit 150ms hai)
    try {
        const fn2 = async (n) => {
            await new Promise(res => setTimeout(res, 100)); // 100ms delay
            return n * n;
        };
        const limited2 = timeLimit(fn2, 150); // 150ms ka time limit
        const res = await limited2(5);
        // Ye successfully resolve ho jayega aur 25 print karega
        console.log("Example 2 Result (Resolved):", res);
    } catch (err) {
        console.log("Example 2 Result (Rejected):", err);
    }
}

// Function ko call karke output dekho terminal mein
runTests();