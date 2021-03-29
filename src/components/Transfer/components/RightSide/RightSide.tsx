import React, { FC } from 'react';
import { Icon } from '../../../Icon/view';
import {
    StyledTransformRightSideContainer,
    StyledTransformRightSideHeader,
    StyledTransformRightSideHeaderCloseButton,
    StyledTransformRightSideItem,
    StyledTransformRightSideItemContainer,
} from './style';
import { TransferList } from '../List';
import { Text } from '../../../Typography/Text';
import { TransferRightSideProps } from './types';

export type TransferRightSideType = FC<TransferRightSideProps<HTMLDivElement>>;

export const TransferRightSide: TransferRightSideType = ({
    label,
    clearButtonProps,
    value,
    onOptionClick,
    size,
    visibleRows,
    ...props
}) => {
    return (
        <StyledTransformRightSideContainer {...props}>
            <StyledTransformRightSideHeader size={size}>
                <Text>{label}</Text>
                <StyledTransformRightSideHeaderCloseButton
                    {...clearButtonProps}
                />
            </StyledTransformRightSideHeader>

            <TransferList size={size} visibleRows={visibleRows}>
                {value?.map((option) => (
                    <TransferList.Item
                        size={size}
                        key={option.value}
                        onClick={() => onOptionClick?.(option)}
                    >
                        <StyledTransformRightSideItem size={size}>
                            <Text>{option.label}</Text>
                            <StyledTransformRightSideItemContainer>
                                <Icon name={'clear'} />
                            </StyledTransformRightSideItemContainer>
                        </StyledTransformRightSideItem>
                    </TransferList.Item>
                ))}
            </TransferList>
        </StyledTransformRightSideContainer>
    );
};
