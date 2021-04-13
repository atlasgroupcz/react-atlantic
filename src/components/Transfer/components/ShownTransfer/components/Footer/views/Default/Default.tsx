import React, { FC } from 'react';
import { TransferFooterViewProps } from '../../../../../../types/TransferFooterViewProps';
import { StyledTransferFooterContainer } from './styles';

export type TransferFooterDefaultViewType = FC<TransferFooterViewProps>;

export const TransferDefaultFooterView: TransferFooterDefaultViewType = ({
    cancelComponent,
    submitComponent,
    isVisible,
}) => {
    return isVisible ? (
        <StyledTransferFooterContainer>
            {cancelComponent}
            {submitComponent}
        </StyledTransferFooterContainer>
    ) : null;
};
