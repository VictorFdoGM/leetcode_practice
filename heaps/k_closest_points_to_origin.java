// K Closest Points to Origin
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

import java.util.PriorityQueue;

class Solution {
    public int[][] kClosest(int[][] points, int k) {
        
        PriorityQueue<Integer> heap = new PriorityQueue<>((n1, n2) -> {
            int n1dx = points[n1][0] * points[n1][0];
            int n1dy = points[n1][1] * points[n1][1];
            int n1distance = n1dx + n1dy;

            int n2dx = points[n2][0] * points[n2][0];
            int n2dy = points[n2][1] * points[n2][1];
            int n2distance = n2dx + n2dy;

            return n1distance - n2distance;
        });

        for (int i = 0; i < points.length; i++) {
            heap.add(i);
        }

        int[][] ans = new int[k][2];
        for (int j = 0; j < k; j++) {
            int idx = heap.remove();
            ans[j][0] = points[idx][0];
            ans[j][1] = points[idx][1];
        }

        return ans;
    }
}