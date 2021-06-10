import React, { Fragment } from 'react';
import { Text } from '../../../Typography';
import { RadioType } from '../../types/Radio.type';
import { StyledRadioButtonsInputHidden } from '../Buttons/styles';
import {
    StyledRadioCircularContainer,
    StyledRadioCircularLabel,
    StyledRadioCircularRadio,
    StyledRadioCircularRadioMark,
} from './styles';

export const RadioCircular: RadioType = ({
    onChange,
    values,
    value: currentValue,
    groupName,
    isFullWidth,
}) => (
    <StyledRadioCircularContainer isFullWidth={isFullWidth}>
        {values?.map(({ value, label }) => {
            const isChecked = value === currentValue;

            return (
                <Fragment key={value}>
                    <StyledRadioCircularLabel htmlFor={value}>
                        <StyledRadioCircularRadio isChecked={isChecked}>
                            <StyledRadioCircularRadioMark
                                isChecked={isChecked}
                            />
                        </StyledRadioCircularRadio>
                        <StyledRadioButtonsInputHidden
                            name={groupName}
                            checked={isChecked}
                            onChange={onChange}
                            id={value}
                            value={value}
                        />
                        <Text>{label}</Text>
                    </StyledRadioCircularLabel>
                </Fragment>
            );
        })}
    </StyledRadioCircularContainer>
);
