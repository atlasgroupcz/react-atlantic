import React from 'react';
import {
    StyledSwitcherFalse,
    StyledSwitcherToggler,
    StyledSwitcherTrue,
    StyledSwitcherWrap,
    StyledSwitchLabel,
} from './styles';
import { SwitchType } from '../types';
import { HiddenCheckbox } from '../../Checkbox/view/alpha/styles';

export const Switch: SwitchType = ({
    isDisabled,
    isChecked,
    className,
    size = 'small',
    textOn,
    textOff,
    type = 'default',
    ...props
}) => (
    <StyledSwitchLabel
        size={size}
        htmlType={type}
        isChecked={isChecked}
        isDisabled={isDisabled}
        className={className}
    >
        <HiddenCheckbox checked={isChecked} disabled={isDisabled} {...props} />
        <StyledSwitcherWrap htmlType={type} isChecked={isChecked} size={size}>
            <StyledSwitcherTrue
                htmlType={type}
                size={size}
                isChecked={isChecked}
                isDisabled={isDisabled}
            >
                {textOn}
            </StyledSwitcherTrue>
            <StyledSwitcherToggler
                size={size}
                htmlType={type}
                isChecked={isChecked}
                isDisabled={isDisabled}
            />
            <StyledSwitcherFalse
                htmlType={type}
                size={size}
                isChecked={isChecked}
                isDisabled={isDisabled}
            >
                {textOff}
            </StyledSwitcherFalse>
        </StyledSwitcherWrap>
    </StyledSwitchLabel>
);
