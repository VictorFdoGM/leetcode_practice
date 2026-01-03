class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxOnes = 0;
        int oneCounter = 0;
        for (int elem : nums) {
            
            if (elem == 1) {
                oneCounter += 1;
                maxOnes = Math.max(maxOnes, oneCounter);
            } else {
                oneCounter = 0;
            }
        }
        return maxOnes;    
    }
}