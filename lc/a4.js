var removeElement = function (nums, val) {

    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        // console.log(`when i is ${i}-> value ${nums[i]}`)
        if (nums[i] !== val) {
            // console.log(`when j is ${j}`)
            nums[j] = nums[i]
            j++
        }
        //    console.log(nums)
    }
    // console.log(nums, "final")
    return j
};

// console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))