import java.util.Arrays;

// class Solution {
//     public int[] sortedSquares(int[] nums) {
        
//         int[] numSquares = new int[nums.length];
//         for (int i = 0; i < nums.length; i++) {
//             numSquares[i] = nums[i] * nums[i];
//         }
//         Arrays.sort(numSquares);
//         return numSquares;
//     }
// }

class Solution {
    public int[] sortedSquares(int[] nums) {
        
        int[] numSquares = new int[nums.length];
        int left = 0;
        int right = nums.length - 1;
        for (int i = numSquares.length - 1; i >= 0; i--) {
            int leftSquare = nums[left] * nums[left];
            int rightSquare = nums[right] * nums[right];

            if (leftSquare < rightSquare) {
                numSquares[i] = rightSquare;
                right--;
            } else {
                numSquares[i] = leftSquare;
                left++;
            }
        }
        return numSquares;
    }
}