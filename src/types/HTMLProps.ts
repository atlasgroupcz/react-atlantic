import { ElementProps } from './utils';

export type CommonHTMLProps<T extends Element = Element> = Pick<
    ElementProps<T>,
    'id' | 'className' | 'ref'
>;
