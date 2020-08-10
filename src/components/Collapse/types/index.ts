import {
    CommonHTMLProps,
    FormEvents,
    KeyboardEvents,
    FocusEvents,
} from '../../../types';
import { PropsWithChildren, ReactNode } from 'react';
import { CollapseProviderProps } from '../context';
import { SetUniqueKey } from '../context/types';

export type StyledCollapseProps = {};

export type CollapseEventProps = FormEvents<HTMLDivElement> &
    KeyboardEvents<HTMLDivElement> &
    FocusEvents<HTMLDivElement>;

export type ControllerCollapseProps = CommonHTMLProps<HTMLDivElement> &
    CollapseEventProps &
    CollapseProviderProps;

export type CollapseProps = PropsWithChildren<
    StyledCollapseProps &
        ControllerCollapseProps & {
            expandIcon?: CollapseIconFactoryType;
            setUniqueKey?: SetUniqueKey;
        }
>;

export type CollapseIconFactoryType = (
    iconProps: CollapseIconFactoryTypeArgs
) => ReactNode;

export type CollapseIconFactoryTypeArgs = {
    isActive: boolean;
};
