// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import { getTestBed } from '@angular/core/testing';
import { platformBrowserDynamicTesting, BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/zone-testing';

declare const require: {
    context(
        path: string,
        // tslint:disable-next-line:bool-param-default
        deep?: boolean,
        filter?: RegExp,
    ): {
        keys(): string[];
        <T>(id: string): T;
    };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
// tslint:disable-next-line
context.keys().map(context);
