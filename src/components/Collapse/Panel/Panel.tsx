import React, { FC, useMemo, useCallback } from 'react';
import { StyledPanel, StyledPanelHeader, StyledPanelContent } from './styles';
import { PanelProps } from './types';
import { useCollapseContext } from '../context';
import { isActiveKey } from './utils';

export type CollapsePanelType = FC<PanelProps>;

export const CollapsePanel: CollapsePanelType = ({
    children,
    unique,
    header,
    isDisabled = false,
    ...props
}) => {
    const {
        activeUnique,
        expandIcon,
        expandIconPosition,
        onClick,
    } = useCollapseContext();

    const isActive = useMemo(() => isActiveKey(unique, activeUnique), [
        unique,
        activeUnique,
    ]);

    // Method which triggers setState in hook [controller]
    const handleClick = useCallback(
        (e) => {
            if (!isDisabled) {
                onClick?.(unique);
            }
        },
        [unique, isDisabled, onClick]
    );

    return (
        <StyledPanel {...props}>
            <StyledPanelHeader onClick={handleClick}>
                {expandIconPosition === 'left' ? (
                    <>
                        {expandIcon({ isActive })}
                        {header}
                    </>
                ) : (
                    <>
                        {header}
                        {expandIcon({ isActive })}
                    </>
                )}
            </StyledPanelHeader>
            {isActive && <StyledPanelContent>{children}</StyledPanelContent>}
        </StyledPanel>
    );
};

CollapsePanel.displayName = `CollapsePanel`;
