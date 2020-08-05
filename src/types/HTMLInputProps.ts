import { ElementProps } from './utils';

export type HTMLInputElementProps = Pick<
    ElementProps<HTMLInputElement>,
    'value'
>;

export type HTMLInputDefaultElementProps = Pick<
    ElementProps<HTMLInputElement>,
    'defaultValue'
>;
