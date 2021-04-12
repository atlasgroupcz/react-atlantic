import React from 'react';
import { wrap } from '../../../utils';
import {
    ControlledDefaultTransferCancelButton,
    ControlledDefaultTransferSubmitButton,
    DefaultTransferFooter,
} from '../components/ShownTransfer/components';
import { useTransferOpenSides } from '../hooks/Inner/useTransferOpenSides';
import { DefaultTransferFooterProps } from '../types/DefaultTransferFooterProps';

export const useDefaultTransferFooter = (
    props: Pick<DefaultTransferFooterProps, 'isVisible'> &
        Partial<
            Pick<
                DefaultTransferFooterProps,
                'cancelComponent' | 'submitComponent'
            >
        >
): DefaultTransferFooterProps => {
    const { isRightSideOpen } = useTransferOpenSides();
    return {
        isVisible: isRightSideOpen,
        submitComponent: (
            <ControlledDefaultTransferSubmitButton>
                Potvrdit
            </ControlledDefaultTransferSubmitButton>
        ),
        cancelComponent: (
            <ControlledDefaultTransferCancelButton>
                Zavřít
            </ControlledDefaultTransferCancelButton>
        ),

        ...props,
    };
};

export const ControlledTransferFooter = wrap(
    DefaultTransferFooter,
    useDefaultTransferFooter
);
