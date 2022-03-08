/**
 * 输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */

/**
 * 1. 创建一个map
 * 2. for循环遍历nums数组
 * 3. 用target减去nums[i], 
 *      以计算那个数能跟当前的数字相加得到target
 * 4. 检查map里有没有这个数，
 *      如果有： 返回结果 (下标) [map.get(complement),i]
 *      如果没有 则把 num[i]当作key， 把i当作value放入map中
 */


let nums = [15, 7, 11, 2],
    target = 9;
var twoSum = function(nums, target) {
    // 1. 创建一个map
    let map = new Map();
    // 2.for循环遍历nums数组
    for (let i = 0; i < nums.length; i++) {
        // 3.  用target减去nums[i]
        let complement = target - nums[i];
        // 检查map里有没有这个数
        if (map.has(complement)) {
            // 如果有： 返回结果 (下标) [map.get(complement),i]
            return [map.get(complement), i];
        } else {
            // 如果没有 则把 num[i]当作key， 把i当作value放入map中
            map.set(nums[i], i);
        }
    }
    return [];
};

console.log(twoSum(nums, target))

var twoSum2 = function(nums, target) {
    // 暴力破解
    // 使用两个for循环 num[i] + num[j] = target;  返回 [i, j]
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return i > j ? [j, i] : [i, j]
                    // return [i, j]
            }
        }
    }
    return []
}

console.log(twoSum2(nums, target))