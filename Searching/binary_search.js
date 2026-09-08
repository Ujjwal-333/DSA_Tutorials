function binarySearch(arr, target) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return -1;
}

let arr = [10, 20, 30, 40, 50, 60, 70];

let target = 50;

let result = binarySearch(arr, target);

console.log(result);