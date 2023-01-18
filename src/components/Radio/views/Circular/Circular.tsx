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
    ...props
}) => (
    <StyledRadioCircularContainer isFullWidth={isFullWidth} {...props}>
        {values?.map(({ value, label, isDisabled, content }) => {
            const isChecked = value === currentValue;

            return (
                <Fragment key={value}>
                    <StyledRadioCircularLabel htmlFor={value} isDisabled={isDisabled} isChecked={isChecked}>
                        <StyledRadioCircularRadio>
                            <StyledRadioCircularRadioMark isChecked={isChecked} />
                        </StyledRadioCircularRadio>
                        <StyledRadioCircularInputHidden
                            name={groupName}
                            checked={isChecked}
                            disabled={isDisabled}
                            onChange={onChange}
                            id={value}
                            value={value}
                        />
                        <Text>{label}</Text>
                        {content}
                    </StyledRadioCircularLabel>
                </Fragment>
            );
        })}
    </StyledRadioCircularContainer>
);
