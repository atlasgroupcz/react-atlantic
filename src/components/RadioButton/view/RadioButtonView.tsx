import React, { FC, Fragment } from 'react';
import { Text } from '../../Typography';
import { UseRadioButtonValue } from '../hooks';
import { StyledRadioButton, StyledRadioButtonContainer } from '../styles';

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
                    <StyledRadioButton htmlFor={optionType.value} type={type}>
                        <Text>{optionType.label}</Text>
                    </StyledRadioButton>
                    <input
                        type={'radio'}
                        name={groupName}
                        checked={isChecked}
                        onChange={onChange}
                        id={optionType.value}
                        value={optionType.value}
                    />
                </Fragment>
            );
        })}
    </StyledRadioButtonContainer>
);
