// Compare Version Numbers
// Given two version strings, version1 and version2, compare them. A version string consists of revisions separated by dots '.'. The value of the revision is its integer conversion ignoring leading zeros.

// To compare version strings, compare their revision values in left-to-right order. If one of the version strings has fewer revisions, treat the missing revision values as 0.

// Return the following:

// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let version1Items = version1.split('.').map(Number);
    let version2Items = version2.split('.').map(Number);

    let maxLen = Math.max(version1Items.length, version2Items.length);

    while (version1Items.length < maxLen) version1Items.push(0);
    while (version2Items.length < maxLen) version2Items.push(0);

    let i = 0;
    for (i = 0; i < Math.min(version1Items.length, version2Items.length); i++) {
        if (version1Items[i] < version2Items[i]) {
            return -1;
        } else if (version1Items[i] > version2Items[i]) {
            return 1;
        }
    }
    return 0;
};

var compareVersion = function(version1, version2) {
    let version1Items = version1.split('.');
    let version2Items = version2.split('.');

    let i = 0;
    for (i = 0; i < Math.max(version1Items.length, version2Items.length); i++) {
        let v1 = version1Items[i] != undefined ? parseInt(version1Items[i]) : 0;
        let v2 = version2Items[i] != undefined ? parseInt(version2Items[i]) : 0;
        if (v1 < v2) {
            return -1;
        } else if (v1 > v2) {
            return 1;
        }
    }
    return 0;
};

console.log(compareVersion('1.0.1', '1'));