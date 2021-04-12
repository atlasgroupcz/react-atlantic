import React from 'react';
import { wrap } from '../../../utils';
import {
    ControlledDefaultTransferCancelButton,
    ControlledDefaultTransferSubmitButton,
    DefaultTransferFooter,
} from '../components/ShownTransfer/components';
import { useInnerTransferContext } from '../context';
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
    const { innerValue } = useInnerTransferContext();
    const { isRightSideOpen, isLeftSideOpen } = useTransferOpenSides(
        innerValue
    );

    return {
        isVisible: isRightSideOpen || isLeftSideOpen,
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
