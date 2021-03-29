const chainMaker = {
    chainName: ``,
    getLength() {
        return this.chainName.split(`~~`).length;
    },
    addLink(value) {
        switch (value) {
            case `null`:
                value = `null`;
                break;
            case `true` :
                value = `true`;
                break
            case `false`:
                value = `false`;
                break
        }
        typeof (value) === `undefined` ? value = 'undefined' : ``;
        this.chainName !== `` ? this.chainName = this.chainName + `~~( ${value} )` : this.chainName = `( ${value} )`;
        return chainMaker;
    },
    removeLink(position) {
        if (typeof (position) === `number`) {
            const mass = this.chainName.split(`~~`);
            if (position > 0 && position <= mass.length) {
                mass.splice(position - 1, 1);
                this.chainName = mass.join(`~~`);
                return chainMaker;
            } else {
                this.chainName = ``;
                throw new Error();
            }
        } else {
            this.chainName = ``;
            throw new Error();
        }
    },

    reverseChain() {
        const mass = this.chainName.split(`~~`);
        if (mass.length <= 1) {
            return chainMaker;
        } else {
            mass.reverse();
            this.chainName = mass.join(`~~`);
            return chainMaker;
        }
    },
    finishChain() {
        let res = this.chainName;
        this.chainName = ``;
        return res;
    }
};

module.exports = chainMaker;
