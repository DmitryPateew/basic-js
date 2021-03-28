module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let counter = 0;
        arr.map(element => Array.isArray(element) ? (counter = Math.max(this.calculateDepth(element), counter)) : counter);
        counter++;
        return counter;
    }
};