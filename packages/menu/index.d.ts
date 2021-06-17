import { MenuCommon } from './common';

export declare interface MenuOptions {
	title?: string; // IOS Only
	message?: string; // IOS Only
	view: View;
	actions: object[] | string[];
	cancelButtonText?: string; // IOS Only
}

export declare class Menu extends MenuCommon {
	public static popup(options: MenuOptions): Promise<{ id: number; title: string } | string | boolean | any>;
}
