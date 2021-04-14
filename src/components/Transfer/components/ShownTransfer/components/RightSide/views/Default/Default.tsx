import React, { FC } from 'react';
import { StyledTransformRightSideContainer } from './style';
import { TransferRightSideProps } from './types';

export type TransferRightSideType = FC<TransferRightSideProps<HTMLDivElement>>;

export const TransferDefaultRightSideView: TransferRightSideType = ({
    label,
    value,
    onOptionClick,
    size,
    visibleRows,
    rightHeader,
    rightContainer,
    isVisible,
    ...props
}) => {
    return isVisible ? (
        <StyledTransformRightSideContainer {...props}>
            {rightHeader}
            {rightContainer}
        </StyledTransformRightSideContainer>
    ) : null;
};
