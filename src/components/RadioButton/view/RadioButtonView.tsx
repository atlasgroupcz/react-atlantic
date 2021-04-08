import React, { FC, Fragment } from 'react';
import { Text } from '../../Typography';
import { UseRadioButtonValue } from '../hooks';
import {
    StyledRadioButtonLabel,
    StyledRadioButtonContainer,
    StyledRadioButtonInputHidden,
} from '../styles';

export type RadioButtonViewProps = UseRadioButtonValue;
export type RadioButtonViewType = FC<RadioButtonViewProps>;

export const RadioButtonView: RadioButtonViewType = ({
    onChange,
    values,
    value,
    groupName,
    isFullWidth,
}) => (
    <StyledRadioButtonContainer isFullWidth={isFullWidth}>
        {values?.map((optionType) => {
            const isChecked = optionType.value === value;
            const type = isChecked ? `primary` : `default`;

            return (
                <Fragment key={optionType.value}>
                    <StyledRadioButtonLabel
                        htmlFor={optionType.value}
                        type={type}
                    >
                        <StyledRadioButtonInputHidden
                            name={groupName}
                            checked={isChecked}
                            onChange={onChange}
                            id={optionType.value}
                            value={optionType.value}
                        />
                        <Text>{optionType.label}</Text>
                    </StyledRadioButtonLabel>
                </Fragment>
            );
        })}
    </StyledRadioButtonContainer>
);
