declare function require(module: string);

import { container } from './ioc.config';
import { TYPES } from './types';

const items: Array<string> = ['foo', 'bar'];

items.forEach((item: string, index: number) => {
    const moduleA = container.get(TYPES.ModuleA);

    moduleA.index = index;
    moduleA.item = item;
    moduleA.init();
});