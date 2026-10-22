class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0, right = 1, maxP=0;
        while (right<prices.length){
            if (prices[left] < prices[right]){
                maxP = Math.max(maxP, prices[right] - prices[left]);
            } else {
                left = right;
            }
            right++;
        }
        return maxP;
    }
}
