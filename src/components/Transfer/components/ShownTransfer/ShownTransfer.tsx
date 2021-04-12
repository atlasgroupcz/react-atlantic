import React, { FC } from 'react';
import { ControlledLeftSide } from '../../containers/LeftSide';
import { ControlledRightSide } from '../../containers/RightSide';
import { InnerTransferProvider, useTransferContext } from '../../context';
import { useTransferOpenSides } from '../../hooks/useTransferOpenSides';

export const ShownTransfer: FC = () => {
    const { footer, ...props } = useTransferContext();
    const { isLeftSideOpen, isRightSideOpen } = useTransferOpenSides();

    return (
        <InnerTransferProvider {...props}>
            <ControlledLeftSide />
            <ControlledRightSide />
            {(isLeftSideOpen || isRightSideOpen) && footer}
        </InnerTransferProvider>
    );
};
