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
        <StyledSwitchLabel type={type} isChecked={isChecked} isDisabled={isDisabled} className={className}>
            <HiddenCheckbox checked={isChecked} disabled={isDisabled} {...props} />
            <StyledSwitcherContainer type={type} isChecked={isChecked}>
                <StyledSwitcherTrue
                    type={type}
                    isChecked={isChecked}
                    isPartiallyChecked={isPartiallyChecked}
                    isDisabled={isDisabled}
                >
                    {textOn}
                </StyledSwitcherTrue>
                <StyledSwitcherToggler
                    type={type}
                    isChecked={isChecked}
                    isPartiallyChecked={isPartiallyChecked}
                    isDisabled={isDisabled}
                />
                <StyledSwitcherFalse
                    type={type}
                    isChecked={isChecked}
                    isPartiallyChecked={isPartiallyChecked}
                    isDisabled={isDisabled}
                >
                    {textOff}
                </StyledSwitcherFalse>
            </StyledSwitcherContainer>
        </StyledSwitchLabel>
        {description && <StyledSwitchDescription>{description}</StyledSwitchDescription>}
    </StyledSwitchContainer>
);
