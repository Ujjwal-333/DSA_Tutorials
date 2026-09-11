// LeetCode 912 — Sort an Array

var sortArray = function(nums) {

    function mergeSort(left, right) {

        if (left >= right) {
            return;
        }

        let mid = Math.floor((left + right) / 2);

        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        merge(left, mid, right);
    }

    function merge(left, mid, right) {

        let temp = [];

        let i = left;
        let j = mid + 1;

        while (i <= mid && j <= right) {

            if (nums[i] <= nums[j]) {
                temp.push(nums[i]);
                i++;
            } else {
                temp.push(nums[j]);
                j++;
            }
        }

        while (i <= mid) {
            temp.push(nums[i]);
            i++;
        }

        while (j <= right) {
            temp.push(nums[j]);
            j++;
        }

        for (let k = 0; k < temp.length; k++) {
            nums[left + k] = temp[k];
        }
    }

    mergeSort(0, nums.length - 1);

    return nums;
};