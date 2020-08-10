import { PropsWithChildren, ReactNode } from 'react';
import { CollapseProviderProps } from '../context';

export type StyledCollapseProps = {};

export type ControllerCollapseProps = CollapseProviderProps;

export type CollapseProps = PropsWithChildren<
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
