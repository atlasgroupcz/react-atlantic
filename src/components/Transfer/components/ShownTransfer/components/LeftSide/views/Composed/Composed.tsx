import React, { FC } from 'react';
import { LeftSideProps } from '../../../../../../types';
import { StyledTransferLeftSideNoResults } from './styles';
import { TransferDefaultLeftList } from '../../../List';

export type TransferLeftSideComposedType = FC<LeftSideProps>;

export const TransferComposedLeftSideView: TransferLeftSideComposedType = ({
    options,
    size = 'medium',
    visibleRows,
    noResults,
    isDisabled,
}) => {
    return (
        <>
            <TransferDefaultLeftList />
            {!options?.length && !isDisabled && (
                <StyledTransferLeftSideNoResults
                    size={size}
                    visibleRows={visibleRows}
                >
                    {noResults}
                </StyledTransferLeftSideNoResults>
            )}
        </>
    );
};
