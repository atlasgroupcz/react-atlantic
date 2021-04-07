import React, { FC, Fragment } from 'react';
import { OptionType } from '../../Select';
import { Text } from '../../Typography';
import { UseRadioButtonsValue } from '../hooks';
import {
    StyledRadioButton,
    StyledRadioButtonsContainer,
} from '../styles/RadioButtons.style';

export type RadioButtonsViewProps = UseRadioButtonsValue;
export type RadioButtonsViewType = FC<RadioButtonsViewProps>;

export const RadioButtonsView: RadioButtonsViewType = ({
    onChange,
    values,
    currentValue,
    groupName,
    isFullWidth,
}) => (
    <StyledRadioButtonsContainer isFullWidth={isFullWidth}>
        {values?.map((optionType: OptionType) => {
            const isChecked = optionType.value === currentValue;
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
