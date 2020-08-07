import React from 'react';
import { CollapseProviderProps } from '..';
import { CollapseIconFactoryType } from '../../types';
import { Icon } from '../../..';

export type CollapseContextState = Pick<CollapseProviderProps, 'activeKey'> & {
    expandIcon: CollapseIconFactoryType;
    setActiveKey: SetActiveKey;
};
export type CollapseContextValue = {};

export const defaultCollapseContextState: CollapseContextState = {
    activeKey: 1,
    setActiveKey: () => null,
    expandIcon: (props) => (
        <Icon
            name={props.isActive ? 'arrowDown' : 'arrowRight'}
            isRotating={props.isActive}
        />
    ),
};

export type SetActiveKey = (key: string | number) => void;
