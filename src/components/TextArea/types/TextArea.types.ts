import {
    CommonHTMLProps,
    FocusEvents,
    FormEvents,
    HTMLInputDefaultElementProps,
    HTMLInputElementProps,
    KeyboardEvents,
    PropsWithoutChildren,
    SizeWithDocs,
} from '../../../types';
import { ElementProps } from '../../../types/utils';

type TextAreaElementExtraProps = Pick<
    ElementProps<HTMLTextAreaElement>,
    'placeholder'
>;

export type StyledTextAreaProps = {
    isFullWidth?: boolean;
    isDisabled?: boolean;
    allowResize?: boolean;
} & TextAreaElementExtraProps &
    SizeWithDocs;

type TextAreaElementProps = HTMLInputElementProps &
    HTMLInputDefaultElementProps &
    TextAreaElementExtraProps;

export type TextAreaEventProps = FormEvents<HTMLTextAreaElement> &
    KeyboardEvents<HTMLTextAreaElement> &
    FocusEvents<HTMLTextAreaElement>;

export type ControllerTextAreaProps = CommonHTMLProps<HTMLTextAreaElement> &
    TextAreaEventProps &
    TextAreaElementProps;

export type TextAreaProps = PropsWithoutChildren<
    StyledTextAreaProps & ControllerTextAreaProps
>;
