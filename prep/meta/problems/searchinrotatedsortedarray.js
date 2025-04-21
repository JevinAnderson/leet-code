/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const pivot = getPivot(nums);
  const start = 0;
  const end = nums.length - 1;

  if (nums[pivot] <= target && nums[end] >= target) {
      return binarySearch(nums, target, pivot, end)
  } else {
      return binarySearch(nums, target, start, pivot)
  }
};

const getMid = (start, end) => Math.floor((start + end) / 2)

function getPivot(nums) {
  let start = 0, end = nums.length - 1;

  while (start < end) {
      const mid = getMid(start, end);

      if (nums[mid] >= nums[0]) {
          start = mid + 1;
      } else {
          end = mid;
      }
  }

  return start;
}

function binarySearch(nums, target, start, end) {
  while (start <= end) {
      const mid = getMid(start, end);

      if (nums[mid] === target) {
          return mid;
      }

      if (nums[mid] < target) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }

  return -1;
}