module.exports = function getSeason(date) {
    let season = `winter`;
    if (!date) {
        return 'Unable to determine the time of year!'
    }
    if (Object.keys(date).length > 0) {
        throw new Error();
    }

    switch (date.getMonth()) {
        case 1:
            season = `winter`;
            break;
        case 2:
            season = `spring`;
            break;
        case 3:
            season = `spring`;
            break;
        case 4:
            season = `spring`;
            break;
        case 5:
            season = `summer`;
            break;
        case 6:
            season = `summer`;
            break;
        case 7:
            season = `summer`;
            break;
        case 8:
            season = `autumn`;
            break;
        case 9:
            season = `autumn`;
            break;
        case 10:
            season = `autumn`;
            break;
        case 11:
            season = `winter`;
            break;
        case 12:
            season = `winter`;
            break;
    }
    return season;
};
