import {
    CommonHTMLProps,
    FocusEvents,
    FormEvents,
    KeyboardEvents,
    Size,
} from '../../../types';

export type InputProps = {
    isRound?: boolean;
    size: Size;
    isFullWidth?: boolean;
    isDisabled?: boolean;
} & CommonHTMLProps &
    FormEvents<HTMLInputElement> &
    KeyboardEvents<HTMLInputElement> &
    FocusEvents<HTMLInputElement>;
