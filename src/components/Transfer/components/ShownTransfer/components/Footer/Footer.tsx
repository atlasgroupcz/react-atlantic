import React, { FC } from 'react';
import { StyledTransferFooterContainer } from './styles/Footer.style';
import { Button } from '../../../../../Button/view/default';
import { TransferFooterProps } from '../../../../types/TransferFooterProps';

export type TransferFooterType = FC<TransferFooterProps>;
export const TransferFooter: TransferFooterType = ({
    cancelButtonProps,
    submitButtonProps,
    size,
}) => {
    return (
        <StyledTransferFooterContainer>
            <Button size={size} {...cancelButtonProps} />
            <Button type={'primary'} size={size} {...submitButtonProps} />
        </StyledTransferFooterContainer>
    );
};
