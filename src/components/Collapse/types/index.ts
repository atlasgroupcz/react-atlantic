import { PropsWithChildren, ReactNode } from 'react';
import { CollapseProviderProps } from '../context';
import { CommonHTMLProps } from '../../..';

export type StyledCollapseProps = {};

export type ControllerCollapseProps = CollapseProviderProps;

export type CollapseProps = PropsWithChildren<
    CommonHTMLProps<HTMLDivElement> &
        StyledCollapseProps &
        ControllerCollapseProps & {
            expandIcon?: CollapseIconFactoryType;
        }
>;

export type CollapseIconFactoryType = (
    iconProps: CollapseIconFactoryTypeArgs
) => ReactNode;

export type CollapseIconFactoryTypeArgs = {
    isActive: boolean;
};
