class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let arr = new Array(26).fill(0);
        const base = 'a'.charCodeAt(0);
        for(let i=0; i<s.length; i++){
            arr[s.charCodeAt(i) - base]++;
            arr[t.charCodeAt(i) - base]--;
        }
        for(const count of arr){
            if(count>0) return false;
        }
        return true;
    }
}
