import React, { FC } from 'react';
import { DefaultTransferFooterProps } from '../../../../../types/DefaultTransferFooterProps';
import { StyledTransferFooterContainer } from '../styles';

export type DefaultTransferFooterType = FC<DefaultTransferFooterProps>;

export const DefaultTransferFooter: DefaultTransferFooterType = ({
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
