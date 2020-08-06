import { ElementProps } from '../../../../../types/utils';
import {
    CommonHTMLProps,
    FocusEvents,
    FormEvents,
    HTMLInputDefaultElementProps,
    HTMLInputElementProps,
    KeyboardEvents,
    Size,
} from '../../../../../types';

type InputElementExtraProps = Pick<
    ElementProps<HTMLInputElement>,
    'placeholder'
>;

export type StyledInputProps = {
    isRound?: boolean;
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

export type InputProps = StyledInputProps & ControllerInputProps;
