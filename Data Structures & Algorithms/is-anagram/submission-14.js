class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let sMap = new Map();
        let tMap = new Map();
        for(const x of s){
            if(sMap.has(x)){
                sMap.set(x, sMap.get(x) + 1);
            } else{
                sMap.set(x,1);
            }
        }
        for(const x of t){
            if(tMap.has(x)){
                tMap.set(x, tMap.get(x) + 1);
            } else{
                tMap.set(x,1);
            }
        }
        for(const x of s){
            if(sMap.get(x)!== tMap.get(x)){
                return false;
            }
        }
        return true;
    }
}
