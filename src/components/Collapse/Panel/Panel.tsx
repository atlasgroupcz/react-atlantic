import React, { FC, useMemo, ReactElement } from 'react';
import { StyledPanel } from './style';
import { PanelProps } from './types';
import { useCollapseContext } from '../context';
import { isActiveKey } from './utils';

export type PanelType = FC<PanelProps>;

export const Panel: PanelType = ({ children, unique, ...props }) => {
    const { activeKey } = useCollapseContext();

    const isActive = useMemo(() => isActiveKey(unique, activeKey), [
        unique,
        activeKey,
    ]);

    return (
        <StyledPanel {...props}>{isActive ? children : 'PRDEL'}</StyledPanel>
    );
};
