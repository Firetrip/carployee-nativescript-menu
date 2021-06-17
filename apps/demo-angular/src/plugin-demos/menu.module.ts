import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MenuComponent } from './menu.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MenuComponent }])],
	declarations: [MenuComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class MenuModule {}
