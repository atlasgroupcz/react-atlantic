import { ReactText } from 'react';
import { CommonHTMLProps, Size, Type } from '../../types';

export type BadgeProps = {
    children?: ReactText;
    type?: Type;
    /** small | medium | large */
    size?: Size;
} & CommonHTMLProps;
