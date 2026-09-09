// 973. K Closest Points to Origin


/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */


// ============================================================
// INTUITION
// ============================================================

// Humein origin (0, 0) ke sabse CLOSEST k points find karne hain.
//
// Kisi point [x, y] ki origin se distance:
//
// √(x² + y²)
//
// Lekin humein actual square root calculate karne ki zarurat nahi hai.
//
// Example:
//
// [1, 3]
// Distance = √(1² + 3²)
//         = √10
//
// [-2, 2]
// Distance = √((-2)² + 2²)
//         = √8
//
// Humein sirf compare karna hai:
//
// √10 aur √8
//
// Agar:
// 10 > 8
//
// To:
// √10 > √8
//
// Isliye hum directly:
//
// x² + y²
//
// ko compare kar sakte hain.
//
// Matlab:
// CLOSEST point = jiska x² + y² SMALL ho.
//
//
// Ab problem simple ho gayi:
//
// 1. Har point ki distance calculate karo.
// 2. Points ko distance ke according sort karo.
// 3. First k points return kar do.


// ============================================================
// APPROACH
// ============================================================

// Step 1:
// Points ko sort karenge.
//
// sort() ke andar:
// a aur b do points honge.
//
// Example:
//
// a = [1, 3]
// b = [-2, 2]

function kClosest(points, k) {

    points.sort((a, b) => {

        // Point 'a' ki squared distance calculate karo.
        //
        // a[0] = x
        // a[1] = y
        //
        // distance = x² + y²

        let distanceA =
            a[0] * a[0] +
            a[1] * a[1];


        // Point 'b' ki squared distance calculate karo.

        let distanceB =
            b[0] * b[0] +
            b[1] * b[1];


        // Chhoti distance wala point pehle aayega.
        //
        // Agar:
        // distanceA < distanceB
        //
        // to negative value return hogi
        // aur 'a' pehle aa jayega.
        //
        // Agar:
        // distanceA > distanceB
        //
        // to positive value return hogi
        // aur 'b' pehle aa jayega.

        return distanceA - distanceB;
    });


    // Ab points distance ke according sorted hain.
    //
    // Hume sirf first k points chahiye.
    //
    // slice(0, k):
    //
    // index 0 se k tak ke elements return karega.

    return points.slice(0, k);
}


// ============================================================
// EXAMPLE
// ============================================================

console.log(
    kClosest(
        [[1, 3], [-2, 2]],
        1
    )
);


// Output:
//
// [[-2, 2]]



// ============================================================
// COMPLEXITY
// ============================================================

// Time Complexity:
// O(n log n)
//
// Kyunki hum poore points array ko sort kar rahe hain.
//
// JavaScript ka sort approximately O(n log n) leta hai.
//
//
// Space Complexity:
// O(log n) approximately
//
// Sorting ke internal implementation ke liye
// extra memory/recursion stack use ho sakta hai.