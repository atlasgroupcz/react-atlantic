import React, { FC } from 'react';
import { Icon } from '../../../Icon';
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
    visibleItems,
    isMultiLine,
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

            <TransferList size={size} visibleItems={visibleItems}>
                {value?.map((option) => (
                    <TransferList.Item
                        size={size}
                        visibleItems={visibleItems}
                        isMultiLine={isMultiLine}
                        key={option.value}
                        onClick={() => onOptionClick?.(option)}
                        data-title={!isMultiLine ? option.label : undefined}
                    >
                        <StyledTransformRightSideItem
                            size={size}
                            visibleItems={visibleItems}
                            isMultiLine={isMultiLine}
                        >
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
