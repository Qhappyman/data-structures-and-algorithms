
//暴力遍历
var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length===0) return false;
    for(let i =0;i<matrix.length;i++){
        for(let j = 0;j<matrix[0].length;j++){
            if(matrix[i][j]===target){
                return true;
            }
        }
    }
    return false;
};

//双指针(java)
class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        if(matrix == null || matrix.length == 0) {
            return false;
        }
        int width = matrix[0].length-1; 
        int height = matrix.length;   
        int row=0;
        while(row<height&&width>=0){
            if(matrix[row][width]>target){
                width--;
            }
            else if(matrix[row][width]<target){
                row++;
            }
            else {
                return true;
            }
        }
        return false;
    }
}

// 原理：
// 由于给定的二维数组具备每行从左到右递增以及每列从上到下递增的特点， 当访问到一个元素时， 可以排除数组中的部分元素。
// 从二维数组的右上角开始查找。 如果当前元素等于目标值， 则返回 true。 如果当前元素大于目标值， 则移到左边一列。 如果当前元素小于目标值， 则移到下边一行。
// 可以证明这种方法不会错过目标值。 如果当前元素大于目标值， 说明当前元素的下边的所有元素都一定大于目标值， 因此往下查找不可能找到目标值， 往左查找可能找到目标值。 如果当前元素小于目标值， 说明当前元素的左边的所有元素都一定小于目标值， 因此往左查找不可能找到目标值， 往下查找可能找到目标值