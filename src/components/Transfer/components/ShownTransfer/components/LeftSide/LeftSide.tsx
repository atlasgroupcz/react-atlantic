import React, { FC } from 'react';
import { StyledTransferLeftSide } from './styles';
import { TransferLeftSideProps } from '../../../../types';
import { LeftSideTransferInput, LeftSideList } from './components';
import { useLeftSideList } from '../../hooks/useLeftSideList';
import { wrap } from '../../../../../../utils';

export type TransferLeftSideType = FC<TransferLeftSideProps>;

const ControlledLeftSideTransferList = wrap(LeftSideList, useLeftSideList);

export const TransferLeftSide: TransferLeftSideType = ({
    isLeftSideOpen,
    isRightSideOpen,
    clearInputProps,
    size,
    isDisabled,
    isFullWidth,
    position,
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
            <LeftSideTransferInput
                isLeftSideOpen={isLeftSideOpen}
                {...clearInputProps}
            />
            {isLeftSideOpen && <ControlledLeftSideTransferList />}
        </StyledTransferLeftSide>
    );
};
