import React, { FC } from 'react';
import { Icon } from '../../../../../../../../Icon';
import { Text } from '../../../../../../../../Typography';
import { TransferRightSideItemProps } from '../../../../../../../types/TransferItemProps';
import {
    StyledTransformRightSideItem,
    StyledTransformRightSideItemContainer,
} from '../../../../RightSide';
import { StyledTransferListItem } from '../styles';

export const RightSideItem: FC<TransferRightSideItemProps> = ({
    onClick,
    size,
    option,
}) => {
    return (
        <StyledTransferListItem
            size={size}
            key={option.value}
            onClick={onClick}
        >
            <StyledTransformRightSideItem size={size}>
                <Text>{option.label}</Text>
                <StyledTransformRightSideItemContainer>
                    <Icon name={'clear'} />
                </StyledTransformRightSideItemContainer>
            </StyledTransformRightSideItem>
        </StyledTransferListItem>
    );
};
