import React, { FC } from 'react';
import { wrap } from '../../../../utils';
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
    const { isLeftSideOpen, isRightSideOpen } = useTransferOpenSides();
    return (
        <>
            <ControlledLeftSide />
            {isRightSideOpen && <ControlledRightSide />}
            {(isLeftSideOpen || isRightSideOpen) && <ControlledFooter />}
        </>
    );
};
