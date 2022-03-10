/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 定义 set 集合
    const set = new Set();
    // 定义 i j 双指针， 和 maxLength 最大长度
    let i = 0,
        j = 0,
        maxLength = 0;

    // 判断是否空字符串
    if (s.length === 0) {
        return 0;
    }

    // 算法逻辑
    for (i; i < s.length; i++) {
        // 如果 set 中没有 s[i]， 说明在set中没有重复的 s[i]
        if (!set.has(s[i])) {
            // 将s[i] 添加到set里
            set.add(s[i]);
            // 将maxLength 赋值；
            //maxLength 和 set.size 的值进行比较，哪一个大就赋值给maxLength
            maxLength = Math.max(maxLength, set.size);
            // maxLength = maxLength < set.size ? set.size : maxLength;
        } else {
            // 如果 set 中有 s[i]
            // 执行which循环，在set集合中删除 s[j];  因为s[j]指向set集合中的其中一个数据
            while (set.has(s[i])) {
                // 在set集合中删除 s[j]
                set.delete(s[j]);
                // 将指针j++;
                j++;
                // 循环到删除没有相同的，
            }
            // set集合删除s[j]后， 添加之后的 s[i]，能够达到一直遍历，进行while循环，循环到没有set里面没有数组为止
            set.add(s[i])
        }
    }
    // 最后返回 maxLength
    return maxLength
};
var s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));