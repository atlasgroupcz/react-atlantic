import React, { FC } from 'react';
import { Checkbox } from '../../../../../../../../../../../Checkbox';
import { TransferLeftSideItemProps } from '../../../../../../../../../../types/TransferItemProps';
import { StyledTransferDefaultLeftSideListItem } from './styles';

export const TransferDefaultLeftSideItemView: FC<TransferLeftSideItemProps> = ({
    isChecked,
    option,
    size,
    onClick,
}) => {
    return (
        <StyledTransferDefaultLeftSideListItem size={size} key={option.value}>
            <Checkbox isChecked={isChecked} onClick={onClick} size={size}>
                {option.label}
            </Checkbox>
        </StyledTransferDefaultLeftSideListItem>
    );
};
