import React, { FC } from 'react';
import { TransferRightSideItemProps } from '../../../../../../../../../../types/TransferItemProps';
import { StyledTransformRightSideListItem } from './styles';
import { Text } from '../../../../../../../../../../../Typography';
import { Icon } from '../../../../../../../../../../../Icon';

export const TransferDefaultRightSideItemView: FC<TransferRightSideItemProps> = ({
    onClick,
    size,
    option,
}) => {
    return (
        <StyledTransformRightSideListItem
            size={size}
            key={option.value}
            onClick={onClick}
        >
            <Text>{option.label}</Text>
            <Icon name={'clear'} />
        </StyledTransformRightSideListItem>
    );
};
