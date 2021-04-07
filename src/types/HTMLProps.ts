import { ElementProps } from './utils';

export type CommonHTMLProps<T extends HTMLElement = HTMLElement> = Pick<
    ElementProps<T>,
    'id' | 'className' | 'ref' | 'tabIndex' | 'role'
>;
