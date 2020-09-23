//双指针
var isPalindrome = function (s) {
    let news = s.replace(/[, .:@#$%^&*\-\[\]\{\}"`'\_\?;!\(\)]/g, "") //去除掉所有非数字字母
    news = news.toLowerCase(); //全部转化为小写
    let num = news.length;
    for (let i = 0; i <= news.length / 2; i++) {
        if (news[i] !== news[num - i - 1]) {
            return false;
        }
    }
    return true;
};

//java
class Solution {
    public boolean isPalindrome(String s) {
        if (s == null || s.length() == 0)
            return true;
        s = s.toLowerCase();
        for (int i = 0, j = s.length() - 1; i < j; i++, j--) {
            while (i < j && !Character.isLetterOrDigit(s.charAt(i)))
                i++;
            while (i < j && !Character.isLetterOrDigit(s.charAt(j)))
                j--;
            if (s.charAt(i) != s.charAt(j))
                return false;
        }
        return true;
    }
}