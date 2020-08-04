import { ReactNode } from 'react';

type GetFilteredChildren = (
	children: Readonly<ReactNode>,
	displayName?: Readonly<string>,
	negation?: Readonly<boolean>,
) => Array<Readonly<JSX.Element>>;

interface UseCompositionValue {
	getFilteredChildren: GetFilteredChildren;
}

export const useComposition = (): Readonly<UseCompositionValue> => {
	const getFilteredChildren: GetFilteredChildren = (children, displayName?, negation = false) => {
		const items: Array<Readonly<JSX.Element>> = [];

		if (!displayName) {
			throw new Error(`You have to fill displayName of the Component!`);
		}

		const filter = (item: Readonly<JSX.Element>) => {
			const condition: Readonly<boolean> = negation
				? item?.type?.displayName !== displayName
				: item?.type?.displayName === displayName;

			if (condition && !Array.isArray(item)) {
				items.push(item);
			}
		};

		if (Array.isArray(children)) {
			children.forEach((item) => {
				filter(item);

				if (Array.isArray(item)) {
					item.map(filter);
				}
			});
		} else {
			const item = children as JSX.Element;
			filter(item);
		}

		return items;
	};

	return { getFilteredChildren };
};
