import React, { Fragment } from 'react';
import { Text } from '../../../Typography';
import { StyledRadioButtonsLabel, StyledRadioButtonsContainer, StyledRadioButtonsInputHidden } from './styles';
import { RadioType } from '../../types';

export const RadioButtons: RadioType = ({
    onChange,
    values,
    value: currentValue,
    groupName,
    isFullWidth,
    ...props
}) => (
    <StyledRadioButtonsContainer isFullWidth={isFullWidth} {...props}>
        {values?.map(({ value, label, isDisabled }) => {
            const isChecked = value === currentValue;
            const type = isChecked && !isDisabled ? `primary` : `default`;

            return (
                <Fragment key={value}>
                    <StyledRadioButtonsLabel
                        htmlFor={value}
                        type={type}
                        isDisabled={isDisabled}
                        data-is-disabled={isDisabled}
                    >
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
