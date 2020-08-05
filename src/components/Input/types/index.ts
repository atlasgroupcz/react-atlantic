import {
    Size,
    CommonHTMLProps,
    FormEvents,
    KeyboardEvents,
    FocusEvents,
} from '../../../types';

export type InputProps = {
    isRound?: boolean;
    size: Size;
    isFullWidth?: boolean;
    isDisabled?: boolean;
} & CommonHTMLProps<HTMLInputElement> &
    FormEvents<HTMLInputElement> &
    KeyboardEvents<HTMLInputElement> &
    FocusEvents<HTMLInputElement>;
