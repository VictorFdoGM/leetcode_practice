var findLength = function(s) {
    // curr is the current number of zeros in the window
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[right] == "0") {
            curr++;
        }
        
        while (curr > 1) {
            if (s[left] == "0") {
                curr -= 1;
            }
            left++;
        }
        
        ans = Math.max(ans, right - left + 1);
    }
    
    return ans;
}

findLength('1010111');