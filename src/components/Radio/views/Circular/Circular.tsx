import React, { Fragment } from 'react';
import { Text } from '../../../Typography';
import { RadioType } from '../../types';
import {
    StyledRadioCircularContainer,
    StyledRadioCircularInputHidden,
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
                        <StyledRadioCircularRadio>
                            <StyledRadioCircularRadioMark
                                isChecked={isChecked}
                            />
                        </StyledRadioCircularRadio>
                        <StyledRadioCircularInputHidden
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
