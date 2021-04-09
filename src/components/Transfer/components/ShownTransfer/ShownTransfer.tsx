import React, { FC } from 'react';
import { wrap } from '../../../../utils';
import { InnerTransferProvider, useTransferContext } from '../../context';
import { useTransferOpenSides } from '../../hooks/useTransferOpenSides';
import { TransferLeftSide, TransferRightSide } from './components';
import { useTransferLeftSide } from './hooks/useTransferLeftSide';
import { useTransferRightSide } from './hooks/useTransferRightSide';

const ControlledLeftSide = wrap(TransferLeftSide, useTransferLeftSide);
const ControlledRightSide = wrap(TransferRightSide, useTransferRightSide);

export const ShownTransfer: FC = () => {
    const { footer, ...props } = useTransferContext();
    const { isLeftSideOpen, isRightSideOpen } = useTransferOpenSides();

    return (
        <InnerTransferProvider {...props}>
            <ControlledLeftSide />
            {isRightSideOpen && <ControlledRightSide />}
            {(isLeftSideOpen || isRightSideOpen) && footer}
        </InnerTransferProvider>
    );
};
