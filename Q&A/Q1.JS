// ============================================================
// INTUITION
// ============================================================

// Hume aise subarrays count karne hain jinka sum k se completely
// divide ho jaye.
//
// Example:
// nums = [4, 5, 0, -2, -3, 1]
// k = 5
//
// Normal way mein hum har possible subarray ka sum check kar sakte hain.
// Lekin usme bahut zyada time lagega.
//
// Isliye hum Prefix Sum + Map ka use karenge.
//
// Main idea:
//
// Agar do prefix sums ko k se divide karne par SAME remainder aaye,
// to un dono ke beech ka sum k se completely divide hoga.
//
// Example:
//
// prefixSum1 % k = 2
// prefixSum2 % k = 2
//
// To:
//
// (prefixSum2 - prefixSum1) % k = 0
//
// Matlab un dono prefix sums ke beech ka subarray valid hai.
//
// Hum Map mein store karenge ki koi remainder ab tak kitni baar aaya hai.
//
// Example:
//
// remainder 0 -> 2 times
// remainder 1 -> 3 times
// remainder 2 -> 4 times
//
// Agar current remainder pehle 4 baar aa chuka hai,
// to current prefix sum ke saath 4 valid subarrays banenge.


// ============================================================
// APPROACH
// ============================================================

// Step 1:
// Ek Map banao.
//
// Map mein:
// key   = remainder
// value = woh remainder kitni baar aaya

let map = new Map();


// Step 2:
// Remainder 0 ko initially ek baar store karo.
//
// Iska reason:
// Agar starting se lekar current index tak ka sum
// directly k se divide ho raha hai,
// to us subarray ko count karna hai.
//
// Example:
// sum = 5
// k = 5
//
// 5 % 5 = 0
//
// Isliye 0 ko pehle se Map mein rakhte hain.

map.set(0, 1);


// Step 3:
// Running sum maintain karenge.
//
// Har element ko ek-ek karke sum mein add karenge.

let sum = 0;


// Step 4:
// Valid subarrays ki total counting rakhenge.

let count = 0;


// Step 5:
// Array ke har number ko visit karo.

for (let num of nums) {

    // Current number ko running sum mein add karo.
    sum += num;


    // Current prefix sum ka remainder nikalo.
    //
    // Example:
    // sum = 9
    // k = 5
    //
    // remainder = 9 % 5
    // remainder = 4

    let remainder = sum % k;


    // JavaScript mein negative number ka remainder
    // negative aa sakta hai.
    //
    // Example:
    //
    // -2 % 5 = -2
    //
    // Lekin hume remainder ko positive range mein chahiye.
    //
    // Isliye agar remainder negative hai,
    // to usme k add kar do.
    //
    // -2 + 5 = 3

    if (remainder < 0) {
        remainder += k;
    }


    // Ab check karo ki ye remainder pehle aa chuka hai ya nahi.
    //
    // Agar aa chuka hai,
    // to jitni baar ye remainder pehle aaya tha,
    // utne valid subarrays current position par banenge.

    if (map.has(remainder)) {

        // Map se pata karo ki ye remainder kitni baar aaya tha.
        //
        // Example:
        //
        // remainder = 4
        // map mein 4 ki frequency = 3
        //
        // Matlab 3 valid subarrays banenge.

        count += map.get(remainder);
    }


    // Ab current remainder ki frequency ko 1 se increase karo.
    //
    // Agar remainder pehle exist nahi karta,
    // to 0 + 1 = 1 hoga.
    //
    // Agar pehle 3 baar aa chuka hai,
    // to 3 + 1 = 4 ho jayega.

    map.set(
        remainder,
        (map.get(remainder) || 0) + 1
    );
}


// Step 6:
// Finally total valid subarrays return karo.

return count;