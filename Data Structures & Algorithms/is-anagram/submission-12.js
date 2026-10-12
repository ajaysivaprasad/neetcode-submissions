class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const sCount = new Map();
        const tCount = new Map();
        for (let i=0;i<s.length;i++){
            if(sCount.has(s[i])){
                sCount.set(s[i], sCount.get(s[i]) + 1);
            } else {
                sCount.set(s[i], 1);
            }
            if(tCount.has(t[i])){
                tCount.set(t[i], tCount.get(t[i]) + 1);
            } else {
                tCount.set(t[i], 1);
            }
        }
        for (const x of sCount.keys()) {
            console.log(sCount)
            if(sCount.get(x) !== tCount.get(x)) return false;
        }
        return true;
    }
}
