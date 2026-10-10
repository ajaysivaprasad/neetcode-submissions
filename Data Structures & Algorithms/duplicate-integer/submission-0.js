class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {}
        for (const x of nums){
            if(obj[x]) return true;
            else obj[x] = true;
        }
        return false;
    }
}
