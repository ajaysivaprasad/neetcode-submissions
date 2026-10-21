class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map();
        const base = 'a'.charCodeAt(0);
        for(const word of strs){
            const count = new Array(26).fill(0);
            for(const char of word){
                count[char.charCodeAt(0) - base]++;
            }
            const key = count.join(',');
            if(!result.has(key)){
                result.set(key, []);
            }
            result.get(key).push(word);
        }
        return [...result.values()];
    }
}
