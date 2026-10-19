class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};
        for (const word of strs){
            const sortedWord = [...word].sort().join('');
            if(result[sortedWord]){
                result[sortedWord].push(word);
            } else {
                result[sortedWord] = [word];
            }
        }
        return Object.values(result);
    }
}
