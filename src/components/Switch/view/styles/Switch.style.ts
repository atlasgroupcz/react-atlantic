import styled, { css } from 'styled-components';
import { Type } from '../../../../types';
import { StyledIcon } from '../../../Icon';

type StyledSwitchProps = {
    isChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
    name?: string;
    position?: 'right' | 'left';
    type?: Type;
};

const switchWidth = '54px';
const switchHeight = '26px';
const togglerSize = '20px';

export const StyledSwitchContainer = styled.div`
    display: flex;
`;

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
            opacity: 0.6;
        `}
`;

export const StyledSwitcherContainer = styled.div<StyledSwitchProps>`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 200%;
    transition: right 0.3s ease-out;

    ${({ isChecked }) =>
        isChecked &&
        css`
            right: -${switchWidth};
        `}
`;

export const StyledSwitcherTrue = styled.div<StyledSwitchProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 0 0 50%;
    height: 100%;
    padding-left: ${({ theme }) => theme.padding.md};
    user-select: none;
    color: ${({ theme }) => theme.color.text.gamma};
    background-color: ${({ theme }) => theme.color.border};
    transition: background-color 0.3s ease-out;

    ${StyledIcon} {
        color: ${({ theme }) => theme.color.text.gamma};
    }

    ${({ theme, isChecked, type }) =>
        isChecked &&
        css`
            background-color: ${theme.color[
                type === 'default' ? 'primary' : (type as Type)
            ].alpha};
        `}

    ${({ theme, isDisabled, isChecked, type }) =>
        isDisabled &&
        isChecked &&
        css`
            background-color: ${theme.color[
                type !== 'default' ? (type as Type) : 'primary'
            ].delta};
        `}

    ${({ theme, isPartiallyChecked, type }) =>
        isPartiallyChecked &&
        css`
            background-color: ${theme.color[
                type === 'default' ? 'warning' : (type as Type)
            ].alpha};
        `}
    
    ${({ theme, isDisabled, isPartiallyChecked, type }) =>
        isDisabled &&
        isPartiallyChecked &&
        css`
            background-color: ${theme.color[
                type !== 'default' ? (type as Type) : 'warning'
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
    transition: right 0.3s ease-out, background-color 0.3s ease-out;

    ${({ isChecked }) =>
        isChecked &&
        css`
            right: ${switchWidth};
        `}

    ${({ isPartiallyChecked }) =>
        isPartiallyChecked &&
        css`
            right: calc(${switchWidth} / 4);
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
    user-select: none;
    color: ${({ theme }) => theme.color.text.beta};
    background-color: ${({ theme }) => theme.color.border};
    transition: background-color 0.3s ease-out;

    ${StyledIcon} {
        color: ${({ theme }) => theme.color.text.beta};
    }

    ${({ theme, isPartiallyChecked, type }) =>
        isPartiallyChecked &&
        css`
            background-color: ${theme.color[
                type === 'default' ? 'warning' : (type as Type)
            ].alpha};
        `}

    ${({ theme, isDisabled, isPartiallyChecked, type }) =>
        isDisabled &&
        isPartiallyChecked &&
        css`
            background-color: ${theme.color[
                type !== 'default' ? (type as Type) : 'warning'
            ].delta};
        `}
`;

StyledSwitchLabel.displayName = 'StyledSwitchLabel';
StyledSwitcherContainer.displayName = 'StyledSwitcherWrap';
StyledSwitcherTrue.displayName = 'StyledSwitcherTrue';
StyledSwitcherToggler.displayName = 'StyledSwitcherToggler';
StyledSwitcherFalse.displayName = 'StyledSwitcherFalse';
