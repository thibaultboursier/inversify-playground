declare function require(module: string);

import { container } from './ioc.config';
import { TYPES } from './types';
import ModuleABuilder from './builders/ModuleABuilder';
import IModuleABuilder from './typings/module-a-builder.d';

const items: Array<string> = ['foo', 'bar'];

items.forEach((item: string, index: number) => {
    const moduleABuilder = container.get<IModuleABuilder>(TYPES.ModuleABuilder);
    const moduleA = moduleABuilder
        .setIndex(index)
        .setItem(item)
        .build();

    moduleA.init();
});