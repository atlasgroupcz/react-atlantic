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
            data-is-full-width={isFullWidth}
            data-is-disabled={isDisabled}
            data-is-left-side-open={isLeftSideOpen}
            data-is-right-side-open={isRightSideOpen}
        >
            {leftHeader}
            {leftContainer}
        </StyledTransferLeftSide>
    );
};
