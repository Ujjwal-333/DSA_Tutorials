
var chunk = function(arr, size) {
    // Array ko chunks mein store karne ke liye empty array banayi
    const chunkedArray = [];

    // Loop ko 'size' ke steps ke sath aage badhayenge
    for (let i = 0; i < arr.length; i += size) {
        // slice() method se 'i' se lekar 'i + size' tak ka tukda nikalenge
        const currentChunk = arr.slice(i, i + size);
        
        // Chunked array mein push kar denge
        chunkedArray.push(currentChunk);
    }
    
    return chunkedArray;
};

// ==========================================
// Test Cases
// ==========================================
function runTests() {
    console.log("--- Array Chunking Tests ---");
    
    const arr1 = [1, 2, 3, 4, 5];
    const size1 = 1;
    console.log("Input: arr = [1,2,3,4,5], size = 1");
    console.log("Output:", chunk(arr1, size1)); 
    
    const arr2 = [1, 9, 6, 3, 2];
    const size2 = 3;
    console.log("\nInput: arr = [1,9,6,3,2], size = 3");
    console.log("Output:", chunk(arr2, size2)); 
    
    const arr3 = [8, 5, 3, 2, 6];
    const size3 = 6;
    console.log("\nInput: arr = [8,5,3,2,6], size = 6");
    console.log("Output:", chunk(arr3, size3)); 
 
    const arr4 = [];
    const size4 = 1;
    console.log("\nInput: arr = [], size = 1");
    console.log("Output:", chunk(arr4, size4)); 
}

runTests();