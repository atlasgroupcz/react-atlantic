import React, { FC, useMemo, useCallback } from 'react';
import { StyledPanel, StyledPanelHeader, StyledPanelContent } from './style';
import { PanelProps } from './types';
import { useCollapseContext } from '../context';
import { isActiveKey } from './utils';

export type PanelType = FC<PanelProps>;

export const Panel: PanelType = ({
    children,
    unique,
    header,
    isDisabled,
    onClick,
    ...props
}) => {
    const {
        activeUnique,
        expandIcon,
        expandIconPosition,
        setActiveKey,
    } = useCollapseContext();

    console.log(expandIconPosition);

    const isActive = useMemo(() => isActiveKey(unique, activeUnique), [
        unique,
        activeUnique,
    ]);

    const handleClick = useCallback(
        (e) => {
            setActiveKey(unique);
            onClick?.(e);
        },
        [unique, setActiveKey, onClick]
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
