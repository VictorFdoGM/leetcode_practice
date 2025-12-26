import java.util.LinkedList;
import java.util.Queue;

class Solution {
    public void duplicateZeros(int[] arr) {
        
        int arrLen = arr.length - 1;
        int zeroCount = 0;
        for (int i = 0; i <= arrLen - zeroCount; i++) {
            if (arr[i] == 0) {
                if (i == arrLen - zeroCount) {
                    arr[arrLen] = 0;
                    arrLen--;
                } else {
                    zeroCount++;
                }
            }
        }

        for (int i = arrLen - zeroCount; i >= 0; i--) {
            if (arr[i] == 0) {
                arr[i + zeroCount] = 0;
                zeroCount--;
                arr[i + zeroCount] = 0;
            } else {
                arr[i + zeroCount] = arr[i];
            }
        }
    }
}