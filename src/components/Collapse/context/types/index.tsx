import React from 'react';
import { CollapseProviderProps } from '..';
import { CollapseIconFactoryType } from '../../types';
import { Icon } from '../../..';
import { HorizontalPosition } from '../../../../types';

export type CollapseContextState = Pick<
    CollapseProviderProps,
    'activeUnique'
> & {
    expandIcon: CollapseIconFactoryType;
    expandIconPosition: HorizontalPosition;
    setActiveKey: SetActiveKey;
};
export type CollapseContextValue = {};

export const defaultCollapseContextState: CollapseContextState = {
    activeUnique: 1,
    setActiveKey: () => null,
    expandIcon: (props) => (
        <Icon name={props.isActive ? 'arrowDown' : 'arrowRight'} />
    ),
    expandIconPosition: 'left',
};

export type SetActiveKey = (key: string | number) => void;
