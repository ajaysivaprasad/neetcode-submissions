class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanedString = '';
        for(const char of s){
            if(this.isAlphaNumeric(char)){
                cleanedString += char.toLowerCase();
            }
        }
        return cleanedString === [...cleanedString].reverse().join('');
    }
    isAlphaNumeric(char){
        return(
            (char>='a'&& char<='z') ||
            (char>='A'&& char<='Z') ||
            (char>='0'&& char<='9')
        );
    }
}
