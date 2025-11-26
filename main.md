
## Array and strings bonus problems
https://leetcode.com/problem-list/ajc81mgt/

### Two Pointers

var checkIfPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

### Sliding Window

var findLength = function(nums, k) {
    // curr is the current sum of the window
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];
        while (curr > k) {
            curr -= nums[left];
            left++;
        }
        
        ans = Math.max(ans, right - left + 1);
    }
    
    return ans;
}

### Prefix sum

var answerQueries = function(nums, queries, limit) {
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    
    let ans = [];
    for (const [x, y] of queries) {
        let curr = prefix[y] - prefix[x] + nums[x];
        ans.push(curr < limit);
    }
    
    return ans;
};

## Hashing bonus problems
https://leetcode.com/problem-list/ajcqwr0m/

## Linked List bonus problems
https://leetcode.com/problem-list/ajc6xcwg/

### Fast and slow pointers

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
};

### Reversing a linked list

var swapPairs = function(head) {
    // Check edge case: linked list has 0 or 1 nodes, just return
    if (!head || !head.next) {
        return head;
    }
    
    let dummy = head.next;              // Step 5
    let prev = null;                    // Initialize for step 3
    while (head && head.next) {
        if (prev) {
            prev.next = head.next;      // Step 4
        }
        prev = head;                    // Step 3
        
        let nextNode = head.next.next;  // Step 2
        head.next.next = head;          // Step 1
        
        head.next = nextNode;           // Step 6
        head = nextNode;                // Move to next pair (Step 3)
    }
    
    return dummy;
};

## Stacks and Queues bonus problems
https://leetcode.com/problem-list/ajc6l7ge/

### Monotonic

A monotonic stack or queue is one whose elements are always sorted. It can be sorted either ascending or descending, depending on the algorithm. Monotonic stacks and queues maintain their sorted property by removing elements that would violate the property before adding new elements. 

var dailyTemperatures = function(temperatures) {
    let stack = [];
    let answer = new Array(temperatures.length).fill(0);
    
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            let j = stack.pop();
            answer[j] = i - j;
        }
        
        stack.push(i);
    }
    
    return answer;
};

## Trees and graphs

### Depth-first search (DFS)
In a DFS, we prioritize depth by traversing as far down the tree as possible in one direction (until reaching a leaf node) before considering the other direction.

### Graphs - DFS

### Disjoint Set Union (DSU)

### Graphs - BFS

### Trees and Graphs Bonus Problems
https://leetcode.com/problem-list/ajc6bx5i/

## Heaps (Priority queue)
### Heaps Bonus Problems
https://leetcode.com/problem-list/ajcklrpj/

## Greedy
### Greedy Bonus Problems
https://leetcode.com/problem-list/ajckgn15/

## Binary search

### Code to find element when only having unique values.
let binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            // do something
            return;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    // target is not in arr, but left is at the insertion point
    return left;
}

### When having duplicate elements, get the right most element

let binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

### When having duplicate elements, get the left most element.

let binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

### Binary Search Bonus problems
https://leetcode.com/problem-list/ajcgv2cg/

## Backtracking
