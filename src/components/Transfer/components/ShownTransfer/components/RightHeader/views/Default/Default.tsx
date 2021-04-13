import React, { FC, useCallback } from 'react';
import {
    useInnerTransferContext,
    useTransferContext,
} from '../../../../../../context';
import {
    TransferDefaultClearButton,
    TransferDefaultHeaderLabel,
} from './components';
import { StyledTransformRightSideHeader } from './styles';

export const TransferDefaultRightHeaderView: FC = () => {
    const { size } = useTransferContext();
    const { setInnerValue } = useInnerTransferContext();
    const handleReset = useCallback(() => setInnerValue?.([]), [setInnerValue]);

    return (
        <StyledTransformRightSideHeader size={size}>
            <TransferDefaultHeaderLabel text="Vybráno:" />
            <TransferDefaultClearButton onClick={handleReset}>
                Odstranit vše
            </TransferDefaultClearButton>
        </StyledTransformRightSideHeader>
    );
};
