import React from 'react';
import { TransferFooterViewProps } from '../../../../../types/TransferFooterViewProps';
import { useInnerTransferContext } from '../../../../../context';
import { useTransferOpenSides } from '../../../../../hooks/Inner/useTransferOpenSides';
import {
    TransferDefaultCancelButton,
    TransferDefaultSubmitButton,
} from '../views';

export const useTransferDefaultFooter = (
    props: Pick<TransferFooterViewProps, 'isVisible'> &
        Partial<
            Pick<TransferFooterViewProps, 'cancelComponent' | 'submitComponent'>
        >
): TransferFooterViewProps => {
    const { innerValue } = useInnerTransferContext();
    const { isRightSideOpen, isLeftSideOpen } = useTransferOpenSides(
        innerValue
    );

    return {
        isVisible: isRightSideOpen || isLeftSideOpen,
        submitComponent: (
            <TransferDefaultSubmitButton>Potvrdit</TransferDefaultSubmitButton>
        ),
        cancelComponent: (
            <TransferDefaultCancelButton>Zavřít</TransferDefaultCancelButton>
        ),
        ...props,
    };
};
