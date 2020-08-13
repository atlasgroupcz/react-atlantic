import { ElementProps } from '../../../../../types/utils';
import {
    CommonHTMLProps,
    FocusEvents,
    FormEvents,
    HTMLInputDefaultElementProps,
    HTMLInputElementProps,
    KeyboardEvents,
    PropsWithoutChildren,
    SizeWithDocs,
} from '../../../../../types';

type InputElementExtraProps = Pick<
    ElementProps<HTMLInputElement>,
    'placeholder'
>;

export type StyledInputProps = {
    isRound?: boolean;
    isFullWidth?: boolean;
    isDisabled?: boolean;
} & InputElementExtraProps &
    SizeWithDocs;

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
