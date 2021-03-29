class VigenereCipheringMachine {

    constructor(type) {
        this.type = type;
    }

    encrypt(message, key) {
        message === `undefined` || key === `undefined` ? new Error() : ``;
        let counter = 0;
        let index = 0;
        let result = ``;
        const messageKey = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
        message = message.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            index = 65 + (messageKey.charCodeAt(counter) - 65 + message.charCodeAt(i) - 65) % 26;
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                result += String.fromCharCode(index);
                counter++;
            } else {
                result += message[i];
            }
        }
        this.type === false ? result = result.split(``).reverse().join(``) : ``;
        return result;
    }

    decrypt(message, key) {
        message === `undefined` || key === `undefined` ? new Error() : ``;
        let counter = 0;
        let index = 0;
        let result = ``;
        const messageKey = key.toUpperCase().repeat(Math.ceil(message.length / key.length));
        message = message.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            index = 65 + (26 + message.charCodeAt(i) - messageKey.charCodeAt(counter)) % 26;
            if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
                result += String.fromCharCode(index);
                counter++;
            } else {
                result += message[i];
            }
        }

        this.type === false ? result = result.split(``).reverse().join(``) : ``;
        return result;
    }
}

module.exports = VigenereCipheringMachine;
