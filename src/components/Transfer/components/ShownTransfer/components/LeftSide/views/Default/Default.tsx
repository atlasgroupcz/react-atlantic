import React, { FC } from 'react';
import { StyledTransferLeftSide } from './styles';
import { TransferLeftSideViewProps } from '../../../../../../types';

export type TransferLeftSideViewType = FC<TransferLeftSideViewProps>;

export const TransferDefaultLeftSideView: TransferLeftSideViewType = ({
    isLeftSideOpen,
    isRightSideOpen,
    size,
    isDisabled,
    isFullWidth,
    position,
    leftContainer,
    leftHeader,
}) => {
    return (
        <StyledTransferLeftSide
            position={position}
            isLeftSideOpen={isLeftSideOpen}
            isRightSideOpen={isRightSideOpen}
            isDisabled={isDisabled}
            size={size}
            isFullWidth={isFullWidth}
        >
            {leftHeader}
            {leftContainer}
        </StyledTransferLeftSide>
    );
};
