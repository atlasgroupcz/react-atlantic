import { PropsWithChildren, ReactText } from 'react';
import { CollapseIconFactoryType } from '../types';
import { HorizontalPosition } from '../../..';
import { SetUniqueKey } from './types';

export * from './Context';

export type CollapseProviderPropsWithChildren = PropsWithChildren<
    CollapseProviderProps & {
        expandIcon: CollapseIconFactoryType;
    }
>;

export type CollapseProviderProps = {
    activeUnique: string[] | number[] | ReactText;
    isAccordion?: boolean;
    onClick?: SetUniqueKey;
    expandIconPosition?: HorizontalPosition;
};

// type SetUniqueKey = Dispatch<
//     SetStateAction<CollapseProviderProps['activeUnique']>
// >;
