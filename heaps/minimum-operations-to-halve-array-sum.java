// 2208. Minimum Operations to Halve Array Sum
// You are given an array nums of positive integers. In one operation, you can choose any number from nums and reduce it to exactly half the number. (Note that you may choose this reduced number in future operations.)

// Return the minimum number of operations to reduce the sum of nums by at least half.

import java.util.Comparator;
import java.util.PriorityQueue;

class Solution {
    public int halveArray(int[] nums) {
        double target = 0;
        PriorityQueue<Double> heap = new PriorityQueue<>(Comparator.reverseOrder());
        
        for (double num: nums) {
            target += num;
            heap.add(num);
        }
        
        target /= 2;
        int ans = 0;
        while (target > 0) {
            ans++;
            double x = heap.remove();
            target -= (x / 2);
            heap.add(x / 2);
        }
        
        return ans;
    }
}