import React, { FC, Fragment } from 'react';
import { Text } from '../../Typography';
import { UseRadioButtonsValue } from '../hooks';
import { StyledRadioButton, StyledRadioButtonsContainer } from '../styles';

export type RadioButtonsViewProps = UseRadioButtonsValue;
export type RadioButtonsViewType = FC<RadioButtonsViewProps>;

export const RadioButtonsView: RadioButtonsViewType = ({
    onChange,
    values,
    value,
    groupName,
    isFullWidth,
}) => (
    <StyledRadioButtonsContainer isFullWidth={isFullWidth}>
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
    </StyledRadioButtonsContainer>
);
