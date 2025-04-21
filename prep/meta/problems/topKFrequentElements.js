// https://leetcode.com/problems/top-k-frequent-elements/description/

var topKFrequent = function (nums, k) {
  if (nums.length <= k) {
      return nums;
  }

  const results = [];
  let head = new Node(nums[0])
  let tail = head;
  const lookup = {
      [nums[0]]: head
  }

  for (let i = 1; i < nums.length; i++) {
      const value = nums[i]
      let node = lookup[value]
      if (node) {
          node.count++
      } else {
          node = new Node(value)
          lookup[value] = node;
          node.parent = tail;
          tail.child = node;
          tail = node;
      }


      if(node.shouldAscend) {
          if(tail === node) {
              tail = node.parent;
          }
          node.ascend();
      }


      if (!node.parent) {
          head = node;
      }
      // console.log('outer head print: ', head.print())
      // console.log('Head', head);
  }

  // console.log("head: ", head.print())
  for (let i = 0; i < k && head !== null; i++) {
      results.push(head.value);
      head = head.child;
  }


  return results;
};

class Node {
  parent = null;
  child = null;
  count = 1;

  constructor(value) {
      this.value = value;
  }

  get shouldAscend() {
      return Boolean(this.parent && this.parent.count < this.count);
  }

  ascend() {
      if (!this.shouldAscend) {
          return;
      }

      const parent = this.parent;
      const child = this.child;
      this.parent = parent.parent;
      if (this.parent) {
          this.parent.child = this;
      }
      if(child) {
          child.parent = parent;
      }
      parent.parent = this;
      parent.child = this.child;
      this.child = parent;
      this.ascend();
      return parent;
  }

  get identifier() {
      return `Node[${this.value}]: ${this.count}`;
  }

  print() {
      if (this.child) {
          return this.identifier + ' -> ' + this.child.print()
      }

      return this.identifier;
  }
}