var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let pointer1 = 0;   //慢指针
    for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {   //快指针
        if (nums[pointer1] !== nums[pointer2]) {
            pointer1++;
            nums[pointer1] = nums[pointer2]
        }                   
        //快慢指针值不相同时，慢指针前进并赋值为快指针的值
    }
    return pointer1 + 1;
};