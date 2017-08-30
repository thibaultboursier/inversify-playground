declare function require(module: string);

const { inject, injectable } = require('inversify');
import ModuleA from '../entities/moduleA';

@injectable()
class ModuleABuilder {
    index: number;
    item: Array<string>;

    constructor() {
    }

    /**
     * Build
     */
    build() {
        const { index, item } = this;

        return new ModuleA({ index, item });
    }

    /**
     * Set index
     * @param index
     */
    setIndex(index: number): ModuleABuilder {
        this.index = index;
        return this;
    }

    /**
     * Set item
     * @param item
     */
    setItem(item: Array<string>): ModuleABuilder {
        this.item = item;
        return this;
    }
}

export default ModuleABuilder;