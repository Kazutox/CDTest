import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPluginComponent } from './testplugin.component';

@NgModule({
    imports: [
        CommonModule
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
export class TestPluginModule { }