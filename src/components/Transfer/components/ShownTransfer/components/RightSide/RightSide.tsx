import React, { FC } from 'react';
import { StyledTransformRightSideContainer } from './style';
import { TransferRightSideProps } from './types';

export type TransferRightSideType = FC<TransferRightSideProps<HTMLDivElement>>;

export const TransferRightSide: TransferRightSideType = ({
    label,
    value,
    onOptionClick,
    size,
    visibleRows,
    rightHeader,
    rightContainer,
    ...props
}) => {
    return (
        <StyledTransformRightSideContainer {...props}>
            {rightHeader}
            {rightContainer}
        </StyledTransformRightSideContainer>
    );
};

// <TransferList size={size} visibleRows={visibleRows}>
// {value?.map((option) => (
//     <TransferList.Item
//         size={size}
//         key={option.value}
//         onClick={() => onOptionClick?.(option)}
//     >
//         <StyledTransformRightSideItem size={size}>
//             <Text>{option.label}</Text>
//             <StyledTransformRightSideItemContainer>
//                 <Icon name={'clear'} />
//             </StyledTransformRightSideItemContainer>
//         </StyledTransformRightSideItem>
//     </TransferList.Item>
// ))}
// </TransferList>
