class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let count = {};
        for(const x of s){
            if(count[x]){
                count[x]++;
            } else{
                count[x] = 1;
            }
        }
        for(const x of t){
            if(!count[x]){
                return false
            }
            count[x]--;
        }
        return true;
    }
}
