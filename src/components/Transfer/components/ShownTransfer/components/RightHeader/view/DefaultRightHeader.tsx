import React, { FC, useCallback } from 'react';
import {
    useInnerTransferContext,
    useTransferContext,
} from '../../../../../context';
import { StyledTransformRightSideHeader } from '../../RightSide';
import { ControlledDefaultRightHeaderClearButton } from '../DefaultRightHeaderClearButton';
import { ControlledDefaultRightHeaderLabel } from './DefaultRightHeaderLabel';

export const DefaultRightHeader: FC = () => {
    const { size } = useTransferContext();
    const { setInnerValue } = useInnerTransferContext();
    const handleReset = useCallback(() => setInnerValue?.([]), [setInnerValue]);

    return (
        <StyledTransformRightSideHeader size={size}>
            <ControlledDefaultRightHeaderLabel text="Vybráno" />
            <ControlledDefaultRightHeaderClearButton onClick={handleReset}>
                Odstranit vše
            </ControlledDefaultRightHeaderClearButton>
        </StyledTransformRightSideHeader>
    );
};
