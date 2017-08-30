declare function require(module: string);

const { inject, injectable } = require('inversify');

@injectable()
class ModuleA {
    index: number;
    item: Array<string>;

    constructor({ index, item }) {
        this.index = index;
        this.item = item;
    }

    init() {
        const { index, item } = this;
        console.log(`ModuleA is initialized with index ${index} and item ${item}`);
    }
}

export default ModuleA;