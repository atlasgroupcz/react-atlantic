import React, { FC } from 'react';
import { StyledCollapse } from './styles';
import { CollapseProps } from './types';
import { CollapseProvider } from './context';
import { defaultCollapseContextState } from './context/types';
import { CollapsePanel } from './Panel';

export type CollapseType = FC<CollapseProps>;

export type CollapseComponentComposition = {
    Panel: typeof CollapsePanel;
};

export const Collapse: CollapseType & CollapseComponentComposition = ({
    children,
    className,
    activeUnique,
    isAccordion = false,
    onClick,
    expandIconPosition,
    expandIcon = defaultCollapseContextState.expandIcon,
    ...props
}) => {
    return (
        <CollapseProvider
            onClick={onClick}
            isAccordion={isAccordion}
            activeUnique={activeUnique}
            expandIcon={expandIcon}
            expandIconPosition={expandIconPosition}
        >
            <StyledCollapse {...props} className={className}>
                {children}
            </StyledCollapse>
        </CollapseProvider>
    );
};

Collapse.Panel = CollapsePanel;
Collapse.displayName = 'Collapse';
