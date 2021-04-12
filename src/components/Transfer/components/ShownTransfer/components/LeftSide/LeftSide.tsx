import React, { FC } from 'react';
import { StyledTransferLeftSide } from './styles';
import { TransferLeftSideProps } from '../../../../types';

export type TransferLeftSideType = FC<TransferLeftSideProps>;

export const TransferLeftSide: TransferLeftSideType = ({
    isLeftSideOpen,
    isRightSideOpen,
    clearInputProps,
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
            isValueExist={!!clearInputProps?.value}
            isDisabled={isDisabled}
            size={size}
            isFullWidth={isFullWidth}
        >
            {leftHeader}
            {leftContainer}
        </StyledTransferLeftSide>
    );
};
