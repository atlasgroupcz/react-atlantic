import { PropsWithChildren, ReactNode } from 'react';
import { IconProps } from '../..';
import { CollapseIconFactoryType } from '../types';

export * from './Context';

export type CollapseProviderPropsWithChildren = PropsWithChildren<
    CollapseProviderProps
>;

export type CollapseProviderProps = {
    activeKey: string[] | string | number[] | number;
    accordion?: boolean;
    expandIcon: CollapseIconFactoryType;
};
