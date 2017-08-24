"use strict";
var inversify_1 = require("inversify");
require("reflect-metadata");
var ModuleA_1 = require("./entities/ModuleA");
var ModuleB_1 = require("./entities/ModuleB");
var types_1 = require("./types");
exports.TYPES = types_1.TYPES;
// Creating new container and binding
// modules to it
var container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.ModuleA).to(ModuleA_1.default);
container.bind(types_1.TYPES.ModuleB).to(ModuleB_1.default);
//# sourceMappingURL=ioc.config.js.map