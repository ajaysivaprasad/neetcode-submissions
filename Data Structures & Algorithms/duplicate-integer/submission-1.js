class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dupSet = new Set(nums);
        if(dupSet.size !== nums.length) return true;
        return false;
    }
}
