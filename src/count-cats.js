module.exports = function countCats(matrix) {
    let cats = 0;
    [].concat(...matrix).forEach(record => record === `^^` ? cats++ : ``);
    return cats
};
