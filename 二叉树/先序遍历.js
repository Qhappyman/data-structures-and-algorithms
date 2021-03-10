var preorderTraversal = function (root) {

    // if(!root) return [];

    // result.push(root.val);
    // result = result.concat(preorderTraversal(root.left));
    // result = result.concat(preorderTraversal(root.right));
    // return result;

    //使用栈进行深度优先遍历
    let result = [];
    let stack = [];
    if (root) {
        stack.push(root)
    }
    while (stack.length > 0) {
        let curNode = stack.pop();
        result.push(curNode.val);
        if (curNode.right) {
            stack.push(curNode.right) //先让右节点进去，先进后出
        }
        if (curNode.left) {
            stack.push(curNode.left);   //永远都是左节点先出来
        }
    }
    return result;
};