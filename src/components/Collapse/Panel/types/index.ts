import {
    FormEvents,
    KeyboardEvents,
    FocusEvents,
    CommonHTMLProps,
} from '../../../..';
import { StyledCollapseProps } from '../../types';
import { PropsWithChildren } from 'react';

export type StyledPanelProps = {};

export type PanelEventProps = FormEvents<HTMLDivElement> &
    KeyboardEvents<HTMLDivElement> &
    FocusEvents<HTMLDivElement>;

export type ControllerPanelProps = CommonHTMLProps<HTMLDivElement> &
    PanelEventProps & {
        unique: string | number;
    };

export type PanelProps = PropsWithChildren<
    StyledCollapseProps & ControllerPanelProps
>;
