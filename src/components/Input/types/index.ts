import {
    Size,
    CommonHTMLProps,
    FormEvents,
    KeyboardEvents,
    FocusEvents,
    HTMLInputElementProps,
    HTMLInputDefaultElementProps,
} from '../../../types';
import { ElementProps } from '../../../types/utils';

// type InputElementExtraProps = Pick<
//     ElementProps<HTMLInputElement>,
//     'placeholder'
// >;
//
// export type StyledInputProps = {
//     isRound?: boolean;
//     size: Size;
//     isFullWidth?: boolean;
//     isDisabled?: boolean;
// } & InputElementExtraProps;
//
// type InputElementProps = HTMLInputElementProps &
//     HTMLInputDefaultElementProps &
//     InputElementExtraProps;
//
// export type InputEventProps = FormEvents<HTMLInputElement> &
//     KeyboardEvents<HTMLInputElement> &
//     FocusEvents<HTMLInputElement>;
//
// export type ControllerInputProps = CommonHTMLProps<HTMLInputElement> &
//     InputEventProps &
//     InputElementProps;
//
// export type InputProps = StyledInputProps & ControllerInputProps;
