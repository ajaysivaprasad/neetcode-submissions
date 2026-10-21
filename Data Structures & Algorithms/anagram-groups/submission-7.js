class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map();
        for (const word of strs){
            const sortedWord = [...word].sort().join('');
            if(!result.has(sortedWord)){
                result.set(sortedWord, []);
            }
            result.set(sortedWord, [...result.get(sortedWord), word]);
        }
        return [...result.values()];
    }
}
