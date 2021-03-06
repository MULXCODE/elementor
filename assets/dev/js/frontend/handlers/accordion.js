import TabsModule from './base-tabs';

export default class Accordion extends TabsModule {
	getDefaultSettings() {
		const defaultSettings = super.getDefaultSettings();

		return {
			...defaultSettings,
			showTabFn: 'slideDown',
			hideTabFn: 'slideUp',
		};
	}
}
