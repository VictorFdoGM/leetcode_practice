// Design Search Autocomplete System
// Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character '#').

// You are given a string array sentences and an integer array times both of length n where sentences[i] is a previously typed sentence and times[i] is the corresponding number of times the sentence was typed. For each input character except '#', return the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed.

// Here are the specific rules:

// The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.
// The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one). If several sentences have the same hot degree, use ASCII-code order (smaller one appears first).
// If less than 3 hot sentences exist, return as many as you can.
// When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.
// Implement the AutocompleteSystem class:

// AutocompleteSystem(String[] sentences, int[] times) Initializes the object with the sentences and times arrays.
// List<String> input(char c) This indicates that the user typed the character c.
// Returns an empty array [] if c == '#' and stores the inputted sentence in the system.
// Returns the top 3 historical hot sentences that have the same prefix as the part of the sentence already typed. If there are fewer than 3 matches, return them all.

/**
 * First attemp 
 */
var Trie = function () {
    this.children = new Map();
    this.suggestions = {};
}

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.trie = new Trie();
    this.currTrie = this.trie;
    this.currWord = '';
    this.dead = new Trie();

    for (let i = 0; i < sentences.length; i++) {
        this.insert(sentences[i], times[i]);
    }
};

AutocompleteSystem.prototype.insert = function(sentence, times) {
    let currNode = this.trie;
    for (const char of sentence.split('')) {
        if(!currNode.children.has(char)) {
            currNode.children.set(char, new Trie());
        }
        currNode = currNode.children.get(char);
        currNode.suggestions[sentence] = (currNode.suggestions[sentence] || 0) + times
    }
}

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {

    if (c == '#') {
        this.insert(this.currWord, 1);
        this.currWord = '';
        this.currTrie = this.trie;
        return []
    }

    this.currWord += c;
    if (this.currTrie.children.has(c)) {
        this.currTrie = this.currTrie.children.get(c);
        return Object.keys(this.currTrie.suggestions).sort((a, b) =>
            this.currTrie.suggestions[b] === this.currTrie.suggestions[a]
                ? a.localeCompare(b)
                : this.currTrie.suggestions[b] - this.currTrie.suggestions[a]
        ).slice(0, 3);
    } else {
        this.currTrie = this.dead
        return [];
    }
};
/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */