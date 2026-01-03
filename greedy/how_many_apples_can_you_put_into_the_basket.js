// How Many Apples Can You Put into the Basket

// You have some apples and a basket that can carry up to 5000 units of weight.

// Given an integer array weight where weight[i] is the weight of the ith apple, return the maximum number of apples you can put in the basket.

/**
 * @param {number[]} weight
 * @return {number}
 */
var maxNumberOfApples = function(weight) {
    
    weight.sort((a, b) => a - b);

    const MAX = 5000;
    let ans = 0;
    let counter = 0;
    for (let i = 0; i < weight.length; i++) {
        if (counter + weight[i] > MAX) {
            break;
        } else {
            counter += weight[i];
            ans++;
        }
    }

    return ans;
};

console.log(maxNumberOfApples([100,200,150,1000]));
console.log(maxNumberOfApples([900,950,800,1000,700,800]));