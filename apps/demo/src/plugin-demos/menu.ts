import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMenu } from '@demo/shared';
import {} from '@nativescript/menu';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMenu {}
