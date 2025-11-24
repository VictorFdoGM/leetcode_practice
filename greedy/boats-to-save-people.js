// 881. Boats to Save People
// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    
    people.sort((a, b) => a - b);

    let i = 0;
    let j = people.length - 1;

    let boats = 0;
    while (i <= j) {

        if (people[i] + people[j] <= limit) {
            i++;
        }
        j--;
        boats++;
    }

    return boats;
};

console.log(numRescueBoats([1,2], 3));
console.log(numRescueBoats([3,2,2,1], 3));
console.log(numRescueBoats([3,5,3,4], 5));