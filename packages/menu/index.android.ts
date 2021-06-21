import { Application, Utils } from '@nativescript/core';
import { MenuOptions } from '@carployee/menu';
import { MenuCommon } from './common';

export class Menu extends MenuCommon {
	public static popup(options: MenuOptions): Promise<{ id: number; title: string } | string | boolean | any> {
		return new Promise((resolve, reject) => {
			try {
				let popupMenu = new android.widget.PopupMenu(Application.android.foregroundActivity, options.view.android);

				if (options.actions[0] !== undefined) {
					if (Utils.isString(options.actions[0])) {
						for (let i = 0; i < options.actions.length; i++) {
							const action: any = options.actions[i];
							popupMenu.getMenu().add(action as any);
						}

						popupMenu.setOnMenuItemClickListener(
							new android.widget.PopupMenu.OnMenuItemClickListener({
								onMenuItemClick: (item): boolean => {
									resolve({
										id: (options.actions as any[]).indexOf(item.getTitle()),
										title: item.getTitle(),
									});
									return true;
								},
							})
						);
					} else {
						for (let i = 0; i < options.actions.length; i++) {
							const action: any = options.actions[i];
							if (action.title !== undefined) {
								popupMenu.getMenu().add(action.title);
							}
						}

						popupMenu.setOnMenuItemClickListener(
							new android.widget.PopupMenu.OnMenuItemClickListener({
								onMenuItemClick: (item): boolean => {
									resolve(
										Object.assign(
											{
												id: (options.actions as any[]).find((actionItem) => actionItem.title === item.getTitle()).id || (options.actions as any[]).indexOf((options.actions as any[]).find((actionItem) => actionItem.title === item.getTitle())),
											},
											(options.actions as any[]).find((actionItem) => actionItem.title === item.getTitle())
										)
									);
									return true;
								},
							})
						);
					}
				}

				popupMenu.setOnDismissListener(
					new android.widget.PopupMenu.OnDismissListener({
						onDismiss: () => {
							resolve(false);
						},
					})
				);

				setTimeout(() => {
					popupMenu.show();
				}, 1);
			} catch (error) {
				reject(error);
			}
		});
	}
}
