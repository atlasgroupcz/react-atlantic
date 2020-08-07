import {
    FormEvents,
    KeyboardEvents,
    FocusEvents,
    CommonHTMLProps,
    MouseEvents,
} from '../../../..';
import { StyledCollapseProps } from '../../types';
import { PropsWithChildren, ReactNode } from 'react';

export type StyledPanelProps = {};

export type PanelEventProps = FormEvents<HTMLDivElement> &
    KeyboardEvents<HTMLDivElement> &
    FocusEvents<HTMLDivElement> &
    MouseEvents<HTMLDivElement>;

export type ControllerPanelProps = CommonHTMLProps<HTMLDivElement> &
    PanelEventProps & {
        unique: string | number;
        header: ReactNode;
        isDisabled?: boolean;
    };

export type PanelProps = PropsWithChildren<
    StyledCollapseProps & ControllerPanelProps
>;
