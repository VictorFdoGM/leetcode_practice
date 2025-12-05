// LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

var Node = function(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.left = new Node(0, 0);
    this.right = new Node(0, 0);
    this.left.next = this.right;
    this.right.prev = this.left;
};

LRUCache.prototype.remove = function (node) {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.insert = function (node) {
    let prev = this.right.prev;
    let next = this.right;
    prev.next = node;
    next.prev = node;
    node.next = next,
    node.prev = prev;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key));
        this.insert(this.cache.get(key));
        return this.cache.get(key).val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key));
    }
    this.cache.set(key, new Node(key, value));
    this.insert(this.cache.get(key));

    
    if (this.cache.size > this.capacity) {
        lru = this.left.next;
        this.remove(lru);
        this.cache.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1));
lru.put(3, 3);