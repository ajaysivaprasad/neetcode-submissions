class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};
        for (const word of strs){
            const count = new Array(26).fill(0);
            for(const char of word) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = count.join(',');
            if(!result[key]){
                result[key] = [];
            }
            result[key].push(word);
        }
        return Object.values(result);
    }
}
