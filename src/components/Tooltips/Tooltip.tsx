import React, { FC, ReactNode } from 'react';
import { StyledTooltip } from './styles';

export interface TooltipProps {
    content: ReactNode;
    Component?: FC<any>;
}
export type TooltipType = FC<TooltipProps>;

export const Tooltip: TooltipType = ({
    content,
    Component = StyledTooltip as FC<any>,
    children,
}) => {
    return (
        <>
            {children}
            <Component>{content}</Component>
        </>
    );
};
