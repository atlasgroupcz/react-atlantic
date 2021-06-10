import React, { Fragment } from 'react';
import { Text } from '../../../Typography';
import {
    StyledRadioButtonsLabel,
    StyledRadioButtonsContainer,
    StyledRadioButtonsInputHidden,
} from './styles';
import { RadioType } from '../../types';

export const RadioButtons: RadioType = ({
    onChange,
    values,
    value: currentValue,
    groupName,
    isFullWidth,
}) => (
    <StyledRadioButtonsContainer isFullWidth={isFullWidth}>
        {values?.map(({ value, label }) => {
            const isChecked = value === currentValue;
            const type = isChecked ? `primary` : `default`;

            return (
                <Fragment key={value}>
                    <StyledRadioButtonsLabel htmlFor={value} type={type}>
                        <StyledRadioButtonsInputHidden
                            name={groupName}
                            checked={isChecked}
                            onChange={onChange}
                            id={value}
                            value={value}
                        />
                        <Text>{label}</Text>
                    </StyledRadioButtonsLabel>
                </Fragment>
            );
        })}
    </StyledRadioButtonsContainer>
);
