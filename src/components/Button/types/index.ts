import { Size, Type, CommonHTMLProps } from '../../../types';
import { MouseEvents } from '../../../types/HTMLEvents';

export type ButtonStyleType = Type | 'dashed';

export type ButtonProps = {
    type?: ButtonStyleType;
    isRound?: boolean;
    isDisabled?: boolean;
    size?: Size;
    isFullWidth?: boolean;
    isTransparent?: boolean;
} & CommonHTMLProps<HTMLButtonElement> &
    MouseEvents<HTMLButtonElement>;
