import {
    CommonHTMLProps,
    FormEvents,
    KeyboardEvents,
    FocusEvents,
} from '../../../types';
import { PropsWithChildren } from 'react';

export type StyledCollapseProps = {};

export type CollapseEventProps = FormEvents<HTMLDivElement> &
    KeyboardEvents<HTMLDivElement> &
    FocusEvents<HTMLDivElement>;

export type ControllerInputProps = CommonHTMLProps<HTMLInputElement> &
    CollapseEventProps;

export type CollapseProps = PropsWithChildren<
    StyledCollapseProps & ControllerInputProps
>;
