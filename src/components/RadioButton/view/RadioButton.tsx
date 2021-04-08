import React, { Fragment } from 'react';
import { Text } from '../../Typography';
import {
    StyledRadioButtonLabel,
    StyledRadioButtonContainer,
    StyledRadioButtonInputHidden,
} from '../styles';
import { RadioButtonType } from '../types';

export const RadioButton: RadioButtonType = ({
    onChange,
    values,
    value: currentValue,
    groupName,
    isFullWidth,
}) => (
    <StyledRadioButtonContainer isFullWidth={isFullWidth}>
        {values?.map(({ value, label }) => {
            const isChecked = value === currentValue;
            const type = isChecked ? `primary` : `default`;

            return (
                <Fragment key={value}>
                    <StyledRadioButtonLabel htmlFor={value} type={type}>
                        <StyledRadioButtonInputHidden
                            name={groupName}
                            checked={isChecked}
                            onChange={onChange}
                            id={value}
                            value={value}
                        />
                        <Text>{label}</Text>
                    </StyledRadioButtonLabel>
                </Fragment>
            );
        })}
    </StyledRadioButtonContainer>
);
