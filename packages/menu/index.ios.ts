import { action } from '@nativescript/core';
import { MenuOptions } from '@carployee/menu';
import { MenuCommon } from './common';

export class Menu extends MenuCommon {
	public static popup(options: MenuOptions): Promise<{ id: number; title: string } | string | boolean | any> {
		return new Promise(function (resolve, reject) {
			try {
				let optionsActions = [];
				optionsActions.push(...options.actions);
				action({
					title: options.title,
					message: options.message,
					cancelButtonText: options.cancelButtonText,
					actions: optionsActions.map((r) => r.title || r),
				})
					.then((result) => {
						if (result) {
							let action = (options.actions as any[]).filter((action) => action.title == result)[0];
							if (action) {
								resolve(action);
							} else {
								resolve({
									id: (options.actions as any[]).indexOf(result),
									title: result,
								});
							}

							if (result == options.cancelButtonText) {
								resolve(false);
							}
						}
					})
					.catch(reject);
			} catch (error) {
				reject(error);
			}
		});
	}
}
