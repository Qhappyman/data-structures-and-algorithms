class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums); //先对数组进行排序
        int result = nums[0] + nums[1] + nums[nums.length - 1];
        for (int i = 0; i < nums.length - 2; i++) {
            int slow = i + 1, fast = nums.length - 1; //头指针为每次遍历的i后一个元素为起点,快指针指向数组尾
            while (slow < fast) {
                int val = nums[i] + nums[slow] + nums[fast];
                if (Math.abs(val - target) < Math.abs(result - target)) {
                    result = val; //将新的三数之和与原始值比较，进而更新原始值
                }
                if (val > target) { //如果结果比target大，则向前移动指针
                    fast--;
                } else if (val < target) {
                    slow++;
                } else {
                    return val; //如果三数之和刚好为target，返回val，程序结束
                }
            }
        }
        return result;
    }
}