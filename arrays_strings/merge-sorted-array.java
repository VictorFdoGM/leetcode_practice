class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        
        int maxLen = m + n;
        
        for (int i = maxLen - 1; i >= 0 && n != 0; i--) {
            
            if (m == 0) {
                nums1[i] = nums2[n - 1];
                n--;
            } else {
                if (nums1[m - 1] < nums2[n - 1]) {
                    nums1[i] = nums2[n - 1];
                    n--;
                } else {
                    nums1[i] = nums1[m - 1];
                    m--;
                }
            }
        }
    }
}