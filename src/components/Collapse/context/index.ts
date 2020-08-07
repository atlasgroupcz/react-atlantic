import { PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { CollapseIconFactoryType } from '../types';

export * from './Context';

export type CollapseProviderPropsWithChildren = PropsWithChildren<
    CollapseProviderProps & {
        expandIcon: CollapseIconFactoryType;
    }
>;

export type CollapseProviderProps = {
    activeKey: string[] | string | number[] | number;
    accordion?: boolean;
    setActiveKey: SetActiveKey;
};

type SetActiveKey = Dispatch<
    SetStateAction<CollapseProviderProps['activeKey']>
>;
