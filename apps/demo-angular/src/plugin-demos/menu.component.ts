import { Component, NgZone } from '@angular/core';
import { DemoSharedMenu } from '@demo/shared';
import {} from '@nativescript/menu';

@Component({
	selector: 'demo-menu',
	templateUrl: 'menu.component.html',
})
export class MenuComponent {
	demoShared: DemoSharedMenu;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedMenu();
	}
}
