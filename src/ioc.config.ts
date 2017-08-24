import { Container } from 'inversify';
import 'reflect-metadata';
import ModuleA from './entities/ModuleA';
import ModuleB from './entities/ModuleB';
import {TYPES} from './types';

// Creating new container and binding
// modules to it
const container = new Container();
container.bind<ModuleA>(TYPES.ModuleA).to(ModuleA);
container.bind<ModuleB>(TYPES.ModuleB).to(ModuleB);

export { container, TYPES };
