(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.testplugin = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */







function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var TestPluginComponent = /** @class */ (function () {
    function TestPluginComponent() {
    }
    TestPluginComponent = __decorate([
        core.Component({
            selector: 'testplugin-component',
            styles: [""],
            template: "<h3>Hi, I am the Test Plugin Component!!.</h3>"
        }),
        __metadata("design:paramtypes", [])
    ], TestPluginComponent);
    return TestPluginComponent;
}());

var TestPluginModule = /** @class */ (function () {
    function TestPluginModule() {
    }
    TestPluginModule = __decorate([
        core.NgModule({
            imports: [
                common.CommonModule
            ],
            declarations: [TestPluginComponent],
            entryComponents: [TestPluginComponent],
            providers: [{
                    provide: 'plugins',
                    useValue: [{
                            name: 'testplugin',
                            component: TestPluginComponent
                        }],
                    multi: true
                }]
        })
    ], TestPluginModule);
    return TestPluginModule;
}());

exports.TestPluginModule = TestPluginModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
