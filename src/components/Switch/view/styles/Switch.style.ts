import styled, { css } from 'styled-components';
import { Type } from '../../../../types';

type StyledSwitchProps = {
    isChecked?: boolean;
    isDisabled?: boolean;
    name?: string;
    position?: 'right' | 'left';
    htmlType?: Type;
};

const switchWidth = '54px';
const switchHeight = '26px';
const togglerSize = '20px';

export const StyledSwitchLabel = styled.label<StyledSwitchProps>`
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: ${switchWidth};
    height: ${switchHeight};
    border-radius: ${({ theme }) => theme.width.xs};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.sm};
    cursor: pointer;

    ${({ isDisabled }) =>
        isDisabled &&
        css`
            cursor: not-allowed;
        `}
`;

export const StyledSwitcherWrap = styled.div<StyledSwitchProps>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 200%;
    transition: right 0.3s;

    ${({ isChecked }) =>
        isChecked &&
        css`
            right: -${switchWidth}; ;
            ;
        `}
`;

export const StyledSwitcherTrue = styled.div<StyledSwitchProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    height: 100%;
    line-height: 1;
    user-select: none;
    color: ${({ theme }) => theme.color.text.alpha};
    background-color: ${({ theme }) => theme.color.border};
    transition: background-color 0.3s ease, color 0.3s ease;

    ${({ theme }) => css`
        padding-left: ${theme.padding.md};
        justify-content: flex-start;
    `}

    ${({ theme, isChecked, htmlType }) =>
        isChecked &&
        css`
            color: ${theme.color.text.gamma};
            background-color: ${theme.color[
                htmlType === 'default' ? 'primary' : (htmlType as Type)
            ].alpha};
        `}

    ${({ theme, isDisabled, isChecked, htmlType }) =>
        isDisabled &&
        isChecked &&
        css`
            background-color: ${theme.color[
                htmlType !== 'default' ? (htmlType as Type) : 'primary'
            ].delta};
        `}
`;

export const StyledSwitcherToggler = styled.div<StyledSwitchProps>`
    position: absolute;
    top: 0;
    right: 28px;
    bottom: 0;
    width: ${togglerSize};
    height: ${togglerSize};
    margin: 3px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.background.delta};
    transition: right 0.3s ease;

    ${({ isChecked }) =>
        isChecked &&
        css`
            right: ${switchWidth};
        `}

    ${({ theme, isDisabled }) =>
        isDisabled &&
        css`
            background-color: ${theme.color.background.delta};
        `}
`;

export const StyledSwitcherFalse = styled.div<StyledSwitchProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    height: 100%;
    line-height: 1;
    user-select: none;
    color: ${({ theme }) => theme.color.text.alpha};
    background-color: ${({ theme }) => theme.color.border};
    transition: background-color 0.3s ease, color 0.3s ease;

    ${({ theme, isChecked }) =>
        isChecked &&
        css`
            color: ${theme.color.text.gamma};
        `}

    ${({ theme, isDisabled }) =>
        isDisabled &&
        css`
            color: ${theme.color.text.gamma};
        `}
   
   ${({ theme, isDisabled, htmlType }) =>
        isDisabled &&
        htmlType &&
        css`
            color: ${theme.color.text.gamma};
        `}
`;

StyledSwitchLabel.displayName = 'StyledSwitchLabel';
StyledSwitcherWrap.displayName = 'StyledSwitcherWrap';
StyledSwitcherTrue.displayName = 'StyledSwitcherTrue';
StyledSwitcherToggler.displayName = 'StyledSwitcherToggler';
StyledSwitcherFalse.displayName = 'StyledSwitcherFalse';
