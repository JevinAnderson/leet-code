/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let result = 0;
  function helper(node, prefix) {
      if (!node) {
          return;
      }
      const current = prefix + node.val;

      if (!node.left && !node.right) {
          // result += parseInt(current, 2);
          result += binaryToBase10(current)
          return;
      }

      helper(node.left, current);
      helper(node.right, current);
  }

  helper(root, '');

  return result;
};


function binaryToBase10(binary) {
  let result = 0;
  let placeValue = 1;
  for (let i = binary.length - 1; i >= 0; i--) {
      const element = binary[i];
      if (element === '1') {
          result += placeValue
      }
      placeValue *= 2;
  }
  return result;
}