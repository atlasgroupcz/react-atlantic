import { CommonHTMLProps, Size, Type, WithoutChildren } from '../../types';

export type IndicatorProps = WithoutChildren<
    {
        type?: Type;
        size?: Size;
    } & CommonHTMLProps<HTMLElement>
>;
