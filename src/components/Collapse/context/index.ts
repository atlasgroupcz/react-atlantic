import { PropsWithChildren, Dispatch, SetStateAction, ReactText } from 'react';
import { CollapseIconFactoryType } from '../types';
import { HorizontalPosition } from '../../..';

export * from './Context';

export type CollapseProviderPropsWithChildren = PropsWithChildren<
    CollapseProviderProps & {
        expandIcon: CollapseIconFactoryType;
    }
>;

export type CollapseProviderProps = {
    activeUnique: string[] | number[] | ReactText;
    isAccordion?: boolean;
    setActiveKey: SetActiveKey;
    expandIconPosition?: HorizontalPosition;
};

type SetActiveKey = Dispatch<
    SetStateAction<CollapseProviderProps['activeUnique']>
>;
