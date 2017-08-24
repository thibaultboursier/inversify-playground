declare function require(module: string);

const { injectable } = require('inversify');

@injectable()
class ModuleB {
    constructor() {

    }
}

export default ModuleB;