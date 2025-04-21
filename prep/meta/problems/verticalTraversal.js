var verticalTraversal = function (root) {
  const buckets = {};
  function traverse(x, y, node) {
      if (!node) return;

      if (!buckets[x]) {
          buckets[x] = {}
      }

      if (!buckets[x][y]) {
          buckets[x][y] = []
      }

      buckets[x][y].push(node.val);

      traverse(x - 1, y + 1, node.left);
      traverse(x + 1, y + 1, node.right);

  }

  traverse(0, 0, root);

  const ascendingSort = (a, b) => a - b;

  return Object.keys(buckets).sort(ascendingSort).map(x => {
      const elements = [];

      Object.keys(buckets[x]).sort(ascendingSort).map(y => {
          elements.push(...buckets[x][y].sort(ascendingSort))
      })

      return elements;
  })
};