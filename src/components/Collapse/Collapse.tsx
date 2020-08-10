import React, { FC } from 'react';
import { StyledCollapse } from './style';
import { CollapseProps } from './types';
import { CollapseProvider } from './context';
import { defaultCollapseContextState } from './context/types';
import { Panel } from './Panel';

export type CollapseType = FC<CollapseProps>;

export type CollapseComponentComposition = {
    Panel: typeof Panel;
};

export const Collapse: CollapseType & CollapseComponentComposition = ({
    children,
    activeKey,
    isAccordion = false,
    setActiveKey,
    expandIcon = defaultCollapseContextState.expandIcon,
    ...props
}) => {
    return (
        <CollapseProvider
            isAccordion={isAccordion}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            expandIcon={expandIcon}
        >
            <StyledCollapse {...props}>{children}</StyledCollapse>
        </CollapseProvider>
    );
};

Collapse.Panel = Panel;
