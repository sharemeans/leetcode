// https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
function heapify(arr, i, len) {
  // 找到节点和左右子节点中最小的
  let minIndex = i
  let leftIndex = 2*i+1
  let rightIndex = 2*i+2
  if (leftIndex < len && arr[minIndex] > arr[leftIndex]) minIndex = leftIndex
  if (rightIndex < len && arr[minIndex] > arr[rightIndex]) minIndex = rightIndex

  if (minIndex != i) {
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp

      heapify(arr, minIndex, len)
  }
}
function buildMinHeap(arr) {
  let len = arr.length
  // 从树底向上比较
  for(let i = Math.floor(len/2); i >= 0; i--) {
      heapify(arr, i, len)
  }
}
/**
* @param {number[]} arr
* @param {number} k
* @return {number[]}
*/
var getLeastNumbers = function(arr, k) {
  let result = []
  // 升序排列，构建最小堆
  buildMinHeap(arr)

  // 堆顶和堆底交换
  for(let i = arr.length - 1; i >= arr.length - k; i--) {
      result.push(arr[0])

      let temp = arr[0]
      arr[0] = arr[i];
      arr[i] = temp;
      heapify(arr, 0, i)
  }
  return result
};