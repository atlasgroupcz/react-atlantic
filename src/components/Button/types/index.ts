import { Size, Type, CommonHTMLProps } from '../../../types';
import { MouseEvents } from '../../../types/HTMLEvents';

export type ButtonStyleType = Type | 'dashed';

export type StyledButtonProps = {
    type?: ButtonStyleType;
    isRound?: boolean;
    size?: Size;
    isFullWidth?: boolean;
    animationRunning?: boolean;
    isTransparent?: boolean;
} & CommonHTMLProps &
    MouseEvents;

export type ButtonProps = Omit<StyledButtonProps, ''>;
