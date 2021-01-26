'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function stringcomparison(a, b) {
    const strA = String(a);
    const strB = String(b);

    if (strA > strB) {
      return 1;
    }

    if (strA < strB) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function(compareFunction = stringcomparison) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}
module.exports = applyCustomSort;
