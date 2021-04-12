import React, { FC } from 'react';
import { StyledTransferLeftSide } from './styles';
import { TransferLeftSideProps } from '../../../../types';

export type TransferLeftSideType = FC<TransferLeftSideProps>;

export const TransferLeftSide: TransferLeftSideType = ({
    isLeftSideOpen,
    isRightSideOpen,
    size,
    isDisabled,
    isFullWidth,
    position,
    leftContainer,
    leftHeader,
    isValue,
}) => {
    return (
        <StyledTransferLeftSide
            position={position}
            isLeftSideOpen={isLeftSideOpen}
            isRightSideOpen={isRightSideOpen}
            isValueExist={isValue}
            isDisabled={isDisabled}
            size={size}
            isFullWidth={isFullWidth}
        >
            {leftHeader}
            {leftContainer}
        </StyledTransferLeftSide>
    );
};
