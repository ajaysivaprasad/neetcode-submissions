class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        let diff;
        for(let i=0; i<nums.length;i++){
             diff=target-nums[i];
             if(map.has(diff)){
                return [map.get(diff), i];
             }
             map.set(nums[i], i);
        }
    }
}
