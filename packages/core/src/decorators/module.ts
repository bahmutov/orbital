import { TypeDecorator, makeDecorator } from './util';

import { Provider } from 'injection-js';

export interface Module {
    imports?: any[];
    providers?: Provider[];
    orbitals?: any[];
    middlewares?: any[];
    config?: {
        port?: number;
        path?: string;
    };
}

export interface ModuleDecorator {
    (obj: Module): TypeDecorator;

    new(obj: Module): Module;
}


export const Module: ModuleDecorator =
    <ModuleDecorator>makeDecorator('Module', (mod: Module = {}) => mod);