import { PropsWithChildren, ReactNode } from 'react';
import { CollapseProviderProps } from '../context';
import { SetUniqueKey } from '../context/types';

export type StyledCollapseProps = {};

export type ControllerCollapseProps = CollapseProviderProps;

export type CollapseProps = PropsWithChildren<
    StyledCollapseProps &
        ControllerCollapseProps & {
            expandIcon?: CollapseIconFactoryType;
            onClick?: SetUniqueKey;
        }
>;

export type CollapseIconFactoryType = (
    iconProps: CollapseIconFactoryTypeArgs
) => ReactNode;

export type CollapseIconFactoryTypeArgs = {
    isActive: boolean;
};
