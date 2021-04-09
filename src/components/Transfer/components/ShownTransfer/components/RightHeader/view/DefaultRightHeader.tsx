import React, { FC } from 'react';
import { useTransferContext } from '../../../../../context';
import { StyledTransformRightSideHeader } from '../../RightSide';
import { ControlledDefaultRightHeaderClearButton } from '../DefaultRightHeaderClearButton';
import { ControlledDefaultRightHeaderLabel } from './DefaultRightHeaderLabel';

export const DefaultRightHeader: FC = () => {
    const { size } = useTransferContext();
    return (
        <StyledTransformRightSideHeader size={size}>
            <ControlledDefaultRightHeaderLabel text="Vybráno" />
            <ControlledDefaultRightHeaderClearButton>
                Odstranit vše
            </ControlledDefaultRightHeaderClearButton>
        </StyledTransformRightSideHeader>
    );
};
