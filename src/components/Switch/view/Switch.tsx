import React from 'react';
import {
    StyledSwitcherFalse,
    StyledSwitcherToggler,
    StyledSwitcherTrue,
    StyledSwitcherContainer,
    StyledSwitchLabel,
} from './styles';
import { HiddenCheckbox } from '../../Checkbox/view/alpha/styles';
import { SwitchType } from '../types';

export const Switch: SwitchType = ({
    isDisabled,
    isChecked,
    className,
    textOn,
    textOff,
    type = 'default',
    ...props
}) => (
    <StyledSwitchLabel
        htmlType={type}
        isChecked={isChecked}
        isDisabled={isDisabled}
        className={className}
    >
        <HiddenCheckbox checked={isChecked} disabled={isDisabled} {...props} />
        <StyledSwitcherContainer htmlType={type} isChecked={isChecked}>
            <StyledSwitcherTrue
                htmlType={type}
                isChecked={isChecked}
                isDisabled={isDisabled}
            >
                {textOn}
            </StyledSwitcherTrue>
            <StyledSwitcherToggler
                htmlType={type}
                isChecked={isChecked}
                isDisabled={isDisabled}
            />
            <StyledSwitcherFalse
                htmlType={type}
                isChecked={isChecked}
                isDisabled={isDisabled}
            >
                {textOff}
            </StyledSwitcherFalse>
        </StyledSwitcherContainer>
    </StyledSwitchLabel>
);
