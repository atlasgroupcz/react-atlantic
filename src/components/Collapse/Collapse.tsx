import React, { FC } from 'react';
import { StyledCollapse } from './style';
import { CollapseProps } from './types';
import { CollapseProvider } from './context';
import { Icon } from '..';

export type CollapseType = FC<CollapseProps>;

export const Collapse: CollapseType = ({
    children,
    activeKey,
    accordion,
    setActiveKey,
    expandIcon = (props) => (
        <Icon name={props.name} isRotating={props.isRotating} />
    ),
    ...props
}) => {
    return (
        <CollapseProvider
            accordion={accordion}
            activeKey={activeKey}
            setActiveKey={setActiveKey}
            expandIcon={expandIcon}
        >
            <StyledCollapse {...props}>{children}</StyledCollapse>
        </CollapseProvider>
    );
};
