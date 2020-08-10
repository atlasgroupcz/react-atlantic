import { PropsWithChildren, Dispatch, SetStateAction, ReactText } from 'react';
import { CollapseIconFactoryType } from '../types';

export * from './Context';

export type CollapseProviderPropsWithChildren = PropsWithChildren<
    CollapseProviderProps & {
        expandIcon: CollapseIconFactoryType;
    }
>;

export type CollapseProviderProps = {
    activeKey: string[] | number[] | ReactText;
    isAccordion?: boolean;
    setActiveKey: SetActiveKey;
};

type SetActiveKey = Dispatch<
    SetStateAction<CollapseProviderProps['activeKey']>
>;
