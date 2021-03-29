module.exports = function repeater(str, options) {
    let result = ``;

    const separator = options.separator || `+`;
    const additionSeparator = options.additionSeparator || `|`;

    const addOp = () => {
        result = `` + options.addition;
        let addSepPlusStr = additionSeparator + result;
        for (let i = 1; i < options.additionRepeatTimes; i++) {
            result += addSepPlusStr;
        }
    }

    options.addition === undefined ? `` : addOp()
    let stringRes = str + result;
    const sepAndString = separator + stringRes;

    for (let i = 1; i < options.repeatTimes; i++) {
        stringRes += sepAndString;
    }

    return stringRes;
};
  