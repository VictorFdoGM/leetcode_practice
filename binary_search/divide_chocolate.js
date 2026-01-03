// Divide Chocolate
// You have one chocolate bar that consists of some chunks. Each chunk has its own sweetness given by the array sweetness.

// You want to share the chocolate with your k friends so you start cutting the chocolate bar into k + 1 pieces using k cuts, each piece consists of some consecutive chunks.

// Being generous, you will eat the piece with the minimum total sweetness and give the other pieces to your friends.

// Find the maximum total sweetness of the piece you can get by cutting the chocolate bar optimally.

/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function(sweetness, k) {
    let numberOfPeople = k + 1;
    let left = Math.min(...sweetness);
    let right = Math.floor(sweetness.reduce((x, y) => x + y) / numberOfPeople);

    let check = (sweet) => {
        let chunks = 0;
        let peopleWithChocolate = 0;
        for (let i = 0; i < sweetness.length; i++) {
            peopleWithChocolate += sweetness[i];
            if (peopleWithChocolate >= sweet) {
                chunks++;
                peopleWithChocolate = 0;
            }
        }
        return chunks >= numberOfPeople;
    }

    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2);
        if (check(mid)) {
            left = mid ;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

console.log(maximizeSweetness([1,2,3,4,5,6,7,8,9], 5));