import React from 'react';
import {
    StyledSelectMultiOptionIcon,
    StyledSelectMultiOptionContainer,
    StyledSelectMultiOptionValue,
} from './styles';
import { Text } from '../../../../../Typography';
import { SelectMultiOptionType } from '../../../../types';
import { useTooltip } from '../../../../../Tooltips';

export const SelectMultiOption: SelectMultiOptionType = ({
    value,
    size,
    ...containerProps
}) => (
    <StyledSelectMultiOptionContainer
        size={size}
        {...containerProps}
        data-position="top"
        data-title={`${value}`}
        ref={useTooltip()}
    >
        <StyledSelectMultiOptionValue>
            {typeof value === 'string' ? <Text>{value}</Text> : value}
        </StyledSelectMultiOptionValue>
        <StyledSelectMultiOptionIcon name={'close'} />
    </StyledSelectMultiOptionContainer>
);
