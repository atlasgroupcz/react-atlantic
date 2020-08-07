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
    console.log(props);
    const { activeKey, expandIcon, setActiveKey } = useCollapseContext();

    const isActive = useMemo(() => isActiveKey(unique, activeKey), [
        unique,
        activeKey,
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
                <>
                    {expandIcon({ isActive })}
                    {header}
                </>
            </StyledPanelHeader>
            {isActive && <StyledPanelContent>{children}</StyledPanelContent>}
        </StyledPanel>
    );
};
