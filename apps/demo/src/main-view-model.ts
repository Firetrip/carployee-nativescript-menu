import { Observable, Frame, Page } from '@nativescript/core';
import { Menu } from '@nativescript/menu';

export class MainViewModel extends Observable {
	constructor(public page: Page) {
		super();
	}
	viewDemo(args) {
		Frame.topmost().navigate({
			moduleName: `plugin-demos/${args.object.text}`,
		});
	}

	buttonTap() {
		Menu.popup({
			view: this.page.getViewById('menuBtn'),
			actions: [
				{ id: 'one', title: 'Example' },
				{ id: 'two', title: 'NativeScript' },
				{ id: 'three', title: 'Menu' },
			],
		})
			.then((action) => {
				if (action.id === 0) {
					alert(action.title);
				} else {
					alert('else action2');
				}
			})
			.catch(console.log);
	}
}
