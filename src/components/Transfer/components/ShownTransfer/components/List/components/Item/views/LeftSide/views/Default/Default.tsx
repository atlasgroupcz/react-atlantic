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
        <StyledTransferDefaultLeftSideListItem size={size} key={option.value} data-size={size}>
            <Checkbox isChecked={isChecked} onClick={onClick} size={size} data-size={size} data-is-checked={isChecked}>
                {option.label}
            </Checkbox>
        </StyledTransferDefaultLeftSideListItem>
    );
};
