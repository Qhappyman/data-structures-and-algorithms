var inorderTraversal = function (root) {
    //递归
    // if(!root) return [];
    // result = result.concat(inorderTraversal(root.left))
    // result.push(root.val);
    // result=result.concat(inorderTraversal(root.right));
    // return result;

    //使用栈
    let result = [];
    let stack = [];
    while (root || stack.length > 0) {
        while (root) {        //先将所有左节点入栈
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();   //取出栈顶元素，取出的可能是左节点，右节点，根节点
        result.push(root.val);  //将节点值推入result
        root = root.right;    //转换到右节点，进行右节点的子树循环
    }
    return result;

    //复杂度都是On
};