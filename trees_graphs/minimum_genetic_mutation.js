// A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

// Suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string.

// For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
// There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

// Given the two gene strings startGene and endGene and the gene bank bank, return the minimum number of mutations needed to mutate from startGene to endGene. If there is no such a mutation, return -1.

// Note that the starting point is assumed to be valid, so it might not be included in the bank.

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    
    let geneChoice = ['A', 'C', 'G', 'T'];
    let bankSet = new Set(bank);
    let seen = new Set([startGene]);
    let queue = [[startGene, 0]];

    while(queue.length) {

        let nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            let gene = queue[i][0] //AACCGGTT
            let step = queue[i][1]

            if (gene == endGene) return step;
            
            for (let j = 0; j < gene.length; j++) {
                
                for (let k = 0; k < geneChoice.length; k++) {
                    
                    if (gene[j] == geneChoice[k]) continue;
                    
                    let nextGene = gene.slice(0, j) + geneChoice[k] + gene.slice(j + 1);
                    if (!seen.has(nextGene) && bankSet.has(nextGene)) {
                        seen.add(nextGene);
                        nextQueue.push([nextGene, step + 1]);
                    }
                }
            }
        }
        // console.log('nextQueue', nextQueue);
        queue = nextQueue;
    }
    return -1;
};

console.log(minMutation('AACCGGTT', 'AACCGGTA', ["AACCGGTA"]));
console.log(minMutation('AACCGGTT', 'AAACGGTA', ["AACCGGTA","AACCGCTA","AAACGGTA"]));