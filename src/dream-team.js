module.exports = function createDreamTeam(members) {
    let resultName = ``
    const getMembers = () => {
        let filtredNames = members.filter((el) => typeof el === `string`);
        filtredNames[0] = filtredNames[0].trim().substr(0, 1);
        resultName = filtredNames.reduce((acum, current) => (acum += current.trim().substr(0, 1)))
            .toUpperCase()
            .split(``)
            .sort()
            .join(``);
    }
    !Array.isArray(members) || members.length === 0 ? resultName = false : getMembers();
    return resultName;
};
