import React from 'react';
import {
    StyledSelectMultiOptionIcon,
    StyledSelectMultiOptionContainer,
    StyledSelectMultiOptionValue,
} from './styles';
import { Text } from '../../../../../Typography';
import { SelectMultiOptionType } from '../../../../types';

export const SelectMultiOption: SelectMultiOptionType = ({
    value,
    size,
    ...containerProps
}) => (
    <StyledSelectMultiOptionContainer size={size} {...containerProps}>
        <StyledSelectMultiOptionValue>
            {typeof value === 'string' ? <Text>{value}</Text> : value}
        </StyledSelectMultiOptionValue>
        <StyledSelectMultiOptionIcon name={'close'} />
    </StyledSelectMultiOptionContainer>
);
