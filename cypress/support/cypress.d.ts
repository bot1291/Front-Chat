declare namespace Cypress {
	interface Chainable {
		getWithTestId<K extends keyof HTMLElementTagNameMap>(
			value: string
		): Chainable<JQuery<HTMLElementTagNameMap[K]>>;
	}
}

declare namespace Cypress {
	interface Chainable {
		checkStorage(
			key: string,
			item: unknown,
			link?: string
		): Chainable<Cypress.StorageByOrigin>;
	}
}
