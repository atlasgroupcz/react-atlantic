import { ReactNode } from 'react';

export type CollapseIconFactoryType = (
    iconProps: CollapseIconFactoryTypeArgs
) => ReactNode;

export type CollapseIconFactoryTypeArgs = {
    isActive: boolean;
};
