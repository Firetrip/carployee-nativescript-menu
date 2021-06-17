# @carployee/menu

```javascript
ns plugin add @carployee/menu
```

This plugin is an NS8 version of https://github.com/xlmnxp/nativescript-menu/blob/master/README.md
All credits to @xlmnxp

A plugin that adds a pop-up menu to NativeScript

### Installation

## Demo

| Android                                                                                                                                        | iOS                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| <img alt="screenshot 1" src="https://raw.githubusercontent.com/xlmnxp/nativescript-menu/master/screenshots/screenshotAndroid.gif" width="170"> | <img alt="screenshot 2" src="https://raw.githubusercontent.com/JoshDSommer/nativescript-menu/master/screenshots/screenshotIos.gif" width="170"> |

## Usage

###

```XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page"
  xmlns:ui="nativescript-menu">
  <StackLayout class="p-20">
    <Button id="menuBtn" text="getMenu" tap="{{ buttonTap }}"/>
  </StackLayout>
</Page>
```

```typescript
import { Menu } from 'nativescript-menu';

export class HelloWorldModel extends Observable {
	public message: string;
	private menu: Menu;

	constructor(public page: Page) {
		super();
	}

	buttonTap() {
		Menu.popup({
			view: this.page.getViewById('menuBtn'),
			actions: ['Example', 'NativeScript', 'Menu'],
		})
			.then((action) => {
				alert(action.id + ' - ' + action.title);
			})
			.catch(console.log);
	}
}
```

with custom options

```typescript
import { Menu } from 'nativescript-menu';

export class HelloWorldModel extends Observable {
	public message: string;
	private menu: Menu;

	constructor(public page: Page) {
		super();
	}

	buttonTap() {
		Menu.popup({
			view: this.page.getViewById('menuBtn'),
			actions: [
				{ id: 'one', title: 'Example' },
				{ id: 'two', title: 'NativeScript', customOption: 'Hello' },
				{ id: 'three', title: 'Menu' },
			],
		})
			.then((action) => {
				alert(JSON.stringify(action));
			})
			.catch(console.log);
	}
}
```

## API

- MenuOptions

```typescript
export interface MenuOptions {
	title?: string; // IOS Only
	message?: string; // IOS Only
	view: View;
	actions: object[] | string[];
	cancelButtonText?: string; // IOS Only
}
```

| Method                                                                                           | Description                      |
| ------------------------------------------------------------------------------------------------ | -------------------------------- |
| **popup(options: MenuOptions)**: Promise<{id: number, title: string} \| actionObject \| boolean> | Create a pop-up menu and show it |
