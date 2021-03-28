const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(data) {
    if (typeof data === `string` && Number(data) > 0) {
        let count = Math.ceil(Math.log(MODERN_ACTIVITY / Number(data)) / (0.693 / HALF_LIFE_PERIOD));
        count < 0 ? count = false : count;
        return count;
    }
    return false;
}
