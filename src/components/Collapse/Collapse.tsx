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
    activeUnique,
    isAccordion = false,
    setUniqueKey,
    expandIconPosition,
    expandIcon = defaultCollapseContextState.expandIcon,
    ...props
}) => {
    return (
        <CollapseProvider
            isAccordion={isAccordion}
            activeUnique={activeUnique}
            setUniqueKey={setUniqueKey}
            expandIcon={expandIcon}
            expandIconPosition={expandIconPosition}
        >
            <StyledCollapse {...props}>{children}</StyledCollapse>
        </CollapseProvider>
    );
};

Collapse.Panel = Panel;
