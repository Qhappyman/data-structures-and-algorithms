//合并后排序(mereg + sort)

var merge = function(A, m, B, n) {
    for(const i of B){
        A[m++]=i;
    }
    A.sort((a,b)=>a-b)
};


//逆向双指针

class Solution {
    public void merge(int[] A, int m, int[] B, int n) {
        int lon = m+n-1;
        int n1 = n-1,m1=m-1;
        while(m1>=0||n1>=0){
            if(m1==-1){         //当A数组已经全部排序后，将B数组依次放入A前面
                A[lon--]=B[n1--];
            }
            else if(n1==-1){    //B数组为空时，将A数组全部放入A前面，也就是原地不动
                A[lon--]=A[m1--];
            }
            else if(B[n1]>A[m1]){
                A[lon--]=B[n1--];
            }
            else if(B[n1]<A[m1]){
                A[lon--]=A[m1--];
            }
            else{
                A[lon--]=B[n1--];
            }
        }
    }

}
// 原理
// 因为A数组的空间足够大, 所以指针设置为从后向前遍历， 每次取两者之中的较大者放进 A 的最后面, 不会出现A数组空间不足的现象
