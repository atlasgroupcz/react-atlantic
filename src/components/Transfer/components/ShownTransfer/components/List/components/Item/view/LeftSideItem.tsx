import React, { FC } from 'react';
import { Checkbox } from '../../../../../../../../Checkbox';
import { TransferLeftSideItemProps } from '../../../../../../../types/TransferItemProps';
import { StyledTransferListItem } from '../styles';

export const LeftSideItem: FC<TransferLeftSideItemProps> = ({
    isChecked,
    option,
    size,
    onClick,
}) => {
    return (
        <StyledTransferListItem size={size} key={option.value}>
            <Checkbox isChecked={isChecked} onClick={onClick} size={size}>
                {option.label}
            </Checkbox>
        </StyledTransferListItem>
    );
};
