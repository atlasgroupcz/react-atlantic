import { PropsWithChildren } from 'react';

export * from './Context';

export type CollapseProviderPropsWithChildren = PropsWithChildren<
    CollapseProviderProps
>;

export type CollapseProviderProps = {
    activeKey: string[] | string | number[] | number;
};
