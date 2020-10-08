module.exports = function check(str, bracketsConfig) {
    let storeBrackets = [],
        pairOfBrackets = {};

    for (let i = 0; i < bracketsConfig.length; i++) {
        pairOfBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    let arrFromStr = str.split("");

    for (let i = 0; i < arrFromStr.length; i++) {
        if (arrFromStr[i] === (storeBrackets[storeBrackets.length - 1] || 0)) {
            storeBrackets.pop();
        } else {
            storeBrackets.push(pairOfBrackets[arrFromStr[i]]);
        }
    }

    if (storeBrackets.length == 0) {
        return true;
    } else {
        return false;
    }
};
