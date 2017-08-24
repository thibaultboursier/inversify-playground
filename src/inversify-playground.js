"use strict";
var ioc_config_1 = require("./ioc.config");
var types_1 = require("./types");
var items = ['foo', 'bar'];
items.forEach(function (item, index) {
    var moduleA = ioc_config_1.container.get(types_1.TYPES.ModuleA);
    moduleA.index = index;
    moduleA.item = item;
    moduleA.init();
});
//# sourceMappingURL=inversify-playground.js.map