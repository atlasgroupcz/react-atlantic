import React, { FC } from 'react';
import { wrap } from '../../../../utils';
import { InnerTransferProvider, useTransferContext } from '../../context';
import { useTransferOpenSides } from '../../hooks/useTransferOpenSides';
import {
    TransferFooter,
    TransferLeftSide,
    TransferRightSide,
} from './components';
import { useTransferFooter } from './hooks/useTransferFooter';
import { useTransferLeftSide } from './hooks/useTransferLeftSide';
import { useTransferRightSide } from './hooks/useTransferRightSide';

const ControlledLeftSide = wrap(TransferLeftSide, useTransferLeftSide);
const ControlledRightSide = wrap(TransferRightSide, useTransferRightSide);
const ControlledFooter = wrap(TransferFooter, useTransferFooter);

export const ShownTransfer: FC = () => {
    const props = useTransferContext();
    const { isLeftSideOpen, isRightSideOpen } = useTransferOpenSides();
    return (
        <InnerTransferProvider {...props}>
            <ControlledLeftSide />
            {isRightSideOpen && <ControlledRightSide />}
            {(isLeftSideOpen || isRightSideOpen) && <ControlledFooter />}
        </InnerTransferProvider>
    );
};
