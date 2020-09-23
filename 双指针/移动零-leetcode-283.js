//双指针(java)
class Solution {
    public void moveZeroes(int[] nums) {
        int slow = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) { //遍历数组，遇到非0元素则依次加入到slow指针处,遇到0元素只移动快指针
                nums[slow++] = nums[i];
            }
        }
        for (; slow < nums.length; slow++) { //遍历完一遍后,slow指针指向的位置后所有非0元素已经移动到最前面，此时进行补0
            nums[slow] = 0;
        }
    }
}
//双指针2
var moveZeroes = function (nums) {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            [nums[slow], nums[i]] = [nums[i], nums[slow]] //当快指针指向的元素非零时，交换俩个元素，快慢指针一起向前移动
            slow++;
        }
    } //快指针指向的元素为0时，只移动快指针
};