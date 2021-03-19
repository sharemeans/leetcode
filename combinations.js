// https://leetcode-cn.com/problems/combinations/
let N
let result
let stack
function DFS (start, k) {
  if (k == 0) {
    result.push(JSON.parse(JSON.stringify(stack)))
    return
  }
  // N - k 剪枝
  if (start > N-k) {
    return
  }

  // 选择当前位置
  stack.push(start+1)
  DFS(start+1, k-1)
  stack.pop()
  // 不选择当前位置
  DFS(start+1, k)
}
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  result = []
  stack = []
  N = n;

  DFS(0,k)
  return result
};
console.log(combine(4,2))

