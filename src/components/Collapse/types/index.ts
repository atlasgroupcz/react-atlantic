import {
    CommonHTMLProps,
    FormEvents,
    KeyboardEvents,
    FocusEvents,
} from '../../../types';
import { PropsWithChildren, ReactNode } from 'react';
import { CollapseProviderProps } from '../context';
import { IconProps } from '../..';
import { SetActiveKey } from '../context/types';

export type StyledCollapseProps = {};

export type CollapseEventProps = FormEvents<HTMLDivElement> &
    KeyboardEvents<HTMLDivElement> &
    FocusEvents<HTMLDivElement>;

export type ControllerInputProps = CommonHTMLProps<HTMLInputElement> &
    CollapseEventProps &
    CollapseProviderProps;

export type CollapseProps = PropsWithChildren<
    StyledCollapseProps &
        ControllerInputProps & {
            expandIcon?: CollapseIconFactoryType;
            setActiveKey?: SetActiveKey;
        }
>;

export type CollapseIconFactoryType = (iconProps: IconProps) => ReactNode;
