// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    
    let winnersMap = {};
    let losersMap = {};
    for (let i = 0; i < matches.length; i++) {
        winnersMap[matches[i][0]] = (winnersMap[matches[i][0]] || 0) + 1;
        losersMap[matches[i][1]] = (losersMap[matches[i][1]] || 0) + 1;
    }

    let winners = [];
    for (const key in winnersMap) {
        if (losersMap[key] == undefined) {
            winners.push(Number(key));
        }
    }

    let losers = [];
    for (const key in losersMap) {
        if (losersMap[key] == 1) {
            losers.push(Number(key));
        }
    }

    return [
        winners.sort((a, b) => a - b),
        losers.sort((a, b) => a - b)
    ];
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]));