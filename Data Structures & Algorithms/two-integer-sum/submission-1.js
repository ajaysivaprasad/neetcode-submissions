class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sum= new Map();
        for(let i=0; i<nums.length; i++){
            const diff = target-nums[i];
            if(sum.has(diff)) {
                return [sum.get(diff), i];
            }
            else {
                sum.set(nums[i],i);
            }
        }
    }
}
