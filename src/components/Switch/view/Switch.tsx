import React from 'react';
import {
    StyledSwitchContainer,
    StyledSwitcherFalse,
    StyledSwitcherToggler,
    StyledSwitcherTrue,
    StyledSwitcherContainer,
    StyledSwitchLabel,
    StyledSwitchDescription,
} from './styles';
import { HiddenCheckbox } from '../../Checkbox/view/alpha/styles';
import { SwitchType } from '../types';

export const Switch: SwitchType = ({
    isPartiallyChecked,
    isDisabled,
    isChecked,
    className,
    textOn,
    textOff,
    type = 'default',
    description,
    ...props
}) => (
    <StyledSwitchContainer>
        <StyledSwitchLabel
            type={type}
            isChecked={isChecked}
            isDisabled={isDisabled}
            className={className}
            data-is-disabled={isDisabled}
            data-is-checked={isChecked}
        >
            <HiddenCheckbox
                checked={isChecked}
                disabled={isDisabled}
                data-is-disabled={isDisabled}
                data-is-checked={isChecked}
                {...props}
            />
            <StyledSwitcherContainer type={type} isChecked={isChecked} data-is-checked={isChecked}>
                <StyledSwitcherTrue
                    type={type}
                    isChecked={isChecked}
                    isPartiallyChecked={isPartiallyChecked}
                    isDisabled={isDisabled}
                    data-is-disabled={isDisabled}
                    data-is-checked={isChecked}
                    data-is-partially-checked={isPartiallyChecked}
                >
                    {textOn}
                </StyledSwitcherTrue>
                <StyledSwitcherToggler
                    type={type}
                    isChecked={isChecked}
                    isPartiallyChecked={isPartiallyChecked}
                    isDisabled={isDisabled}
                    data-is-disabled={isDisabled}
                    data-is-checked={isChecked}
                    data-is-partially-checked={isPartiallyChecked}
                />
                <StyledSwitcherFalse
                    type={type}
                    isChecked={isChecked}
                    isPartiallyChecked={isPartiallyChecked}
                    isDisabled={isDisabled}
                    data-is-disabled={isDisabled}
                    data-is-checked={isChecked}
                    data-is-partially-checked={isPartiallyChecked}
                >
                    {textOff}
                </StyledSwitcherFalse>
            </StyledSwitcherContainer>
        </StyledSwitchLabel>
        {description && <StyledSwitchDescription>{description}</StyledSwitchDescription>}
    </StyledSwitchContainer>
);
