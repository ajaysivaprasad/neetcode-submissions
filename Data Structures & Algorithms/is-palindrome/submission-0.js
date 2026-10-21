class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        const sLength = s.length;
        let end = sLength - 1;

        while (start < end){
            if(!this.isAlphaNumeric(s[start])){
                start++;
                continue;
            }
            if(!this.isAlphaNumeric(s[end])){
                end--;
                continue;
            }               
            if(s[start].toLowerCase() !== s[end].toLowerCase()){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    isAlphaNumeric(char){
        return (
            (char>= 'a' && char <= 'z') ||
            (char>= 'A' && char <= 'Z') ||
            (char>= '0' && char <= '9')
        );
    }
}
