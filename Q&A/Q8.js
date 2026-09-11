// LeetCode 327 — Count of Range Sum
var countRangeSum = function(nums, lower, upper) {

    let n = nums.length;

    let prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    function mergeSort(left, right) {

        if (left >= right) {
            return 0;
        }

        let mid = Math.floor((left + right) / 2);

        let count = 0;

        count += mergeSort(left, mid);
        count += mergeSort(mid + 1, right);

        // Find valid range
        let j = mid + 1;
        let k = mid + 1;

        for (let i = left; i <= mid; i++) {

            while (
                j <= right &&
                prefix[j] - prefix[i] < lower
            ) {
                j++;
            }

            while (
                k <= right &&
                prefix[k] - prefix[i] <= upper
            ) {
                k++;
            }

            count += k - j;
        }

        // Merge
        let temp = [];

        let i = left;
        j = mid + 1;

        while (i <= mid && j <= right) {

            if (prefix[i] <= prefix[j]) {
                temp.push(prefix[i]);
                i++;
            } else {
                temp.push(prefix[j]);
                j++;
            }
        }

        while (i <= mid) {
            temp.push(prefix[i]);
            i++;
        }

        while (j <= right) {
            temp.push(prefix[j]);
            j++;
        }

        for (let x = 0; x < temp.length; x++) {
            prefix[left + x] = temp[x];
        }

        return count;
    }

    return mergeSort(0, n);
};