import React, { FC } from 'react';
import { ControlledLeftSide } from '../../containers/LeftSide';
import { ControlledRightSide } from '../../containers/RightSide';
import { InnerTransferProvider, useTransferContext } from '../../context';

export const ShownTransfer: FC = () => {
    const { footer, ...props } = useTransferContext();

    return (
        <InnerTransferProvider {...props}>
            <ControlledLeftSide />
            <ControlledRightSide />
            {footer}
        </InnerTransferProvider>
    );
};
