module.exports = function transform(arr) {
    arr instanceof Array ?  `` : new Error();
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case `--discard-next`:
                i + 1 < arr.length ? i++ : ``;
                break;
            case `--discard-prev`:
                i - 1 >= 0 && arr[i - 2] !== `--discard-next` ? result.pop() : ``;
                break;
            case `--double-next`:
                i + 1 < arr.length ? result.push(arr[i + 1]) : ``;
                break;
            case `--double-prev`:
                i - 1 >= 0 && arr[i - 2] !== `--discard-next` ? result.push(arr[i - 1]) : ``;
                break;
            default :
                result.push(arr[i]);
        }

    }
    return result
};
