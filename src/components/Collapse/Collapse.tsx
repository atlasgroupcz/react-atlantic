import React, { FC } from 'react';
import { StyledCollapse } from './style';
import { CollapseProps } from './types';
import { CollapseProvider } from './context';

export type CollapseType = FC<CollapseProps>;

export const Collapse: CollapseType = ({ children, ...props }) => {
    return (
        <CollapseProvider activeKey={'1'}>
            <StyledCollapse {...props}>{children}</StyledCollapse>
        </CollapseProvider>
    );
};
