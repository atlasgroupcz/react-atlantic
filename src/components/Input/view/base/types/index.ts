import { ElementProps } from '../../../../../types/utils';
import {
    CommonHTMLProps,
    FocusEvents,
    FormEvents,
    HTMLInputDefaultElementProps,
    HTMLInputElementProps,
    KeyboardEvents,
    PropsWithoutChildren,
    Size,
} from '../../../../../types';

type InputElementExtraProps = Pick<
    ElementProps<HTMLInputElement>,
    'placeholder'
>;

export type StyledInputProps = {
    isRound?: boolean;
    /** small | medium | large */
    size?: Size;
    isFullWidth?: boolean;
    isDisabled?: boolean;
} & InputElementExtraProps;

type InputElementProps = HTMLInputElementProps &
    HTMLInputDefaultElementProps &
    InputElementExtraProps;

export type InputEventProps = FormEvents<HTMLInputElement> &
    KeyboardEvents<HTMLInputElement> &
    FocusEvents<HTMLInputElement>;

export type ControllerInputProps = CommonHTMLProps<HTMLInputElement> &
    InputEventProps &
    InputElementProps;

export type InputProps = PropsWithoutChildren<
    StyledInputProps & ControllerInputProps
>;
