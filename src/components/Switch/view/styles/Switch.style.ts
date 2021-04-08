import styled, { css } from 'styled-components';
import { Size, Type } from '../../../../types';

type StyledSwitchProps = {
    isChecked?: boolean;
    isDisabled?: boolean;
    name?: string;
    position?: 'right' | 'left';
    size?: Size;
    htmlType?: Type;
};

const togglerSizeLarge = '28px';
const togglerSizeNormal = '24px';
const togglerSizeSmall = '16px';

const switchWidthLarge = '80px';
const switchWidthNormal = '70px';
const switchWidthSmall = '50px';

const switchWidthNormalInt = parseInt(switchWidthNormal, 0);
const togglerSizeNormalInt = parseInt(togglerSizeNormal, 0);

export const StyledSwitchLabel = styled.label<StyledSwitchProps>`
    position: relative;
    display: inline-block;
    width: ${switchWidthNormal};
    height: ${(props) => props.theme.height.md};
    overflow: hidden;
    cursor: pointer;
    border-radius: ${(props) => props.theme.height.md};
    font-size: ${(props) => props.theme.font.size.md};
    font-family: ${(props) => props.theme.font.family};

    ${(props) =>
        props.size === 'small' &&
        css`
            height: ${props.theme.height.sm};
            width: ${switchWidthSmall};
            font-size: 12px;
        `}
    ${(props) =>
        props.size === 'large' &&
        css`
            height: ${props.theme.height.lg};
            width: ${switchWidthLarge};
            font-size: 16px;
        `}
  
  ${(props) =>
        props.size === 'medium' &&
        css`
            height: ${props.theme.height.md};
            width: ${switchWidthNormal};
            font-size: 14px;
        `}
  
   ${(props) =>
        props.isDisabled &&
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

    ${({ isChecked, size }) => {
        if (isChecked) {
            if (size === 'small') {
                return css`
                    right: -${switchWidthSmall};
                `;
            } else if (size === 'large') {
                return css`
                    right: -${switchWidthLarge};
                `;
            } else if (size === 'medium') {
                return css`
                    right: -${switchWidthNormal};
                `;
            }

            return css`
                right: -${switchWidthNormal};
            `;
        }
    }}
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
  
  ${(props) =>
        props.size === 'small' &&
        css`
            padding-left: ${(props) => parseInt(props.theme.padding.md, 0)}px;
        `}
  
  ${(props) =>
        props.size === 'large' &&
        css`
            padding-left: ${(props) =>
                parseInt(props.theme.padding.md, 0) + 3}px;
        `}
  
  ${(props) =>
        props.size === 'medium' &&
        css`
            padding-left: ${(props) => parseInt(props.theme.padding.md, 0)}px;
        `}
  
  ${({ isDisabled, isChecked, htmlType, theme }) =>
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
    right: ${(props) =>
        switchWidthNormalInt -
        togglerSizeNormalInt -
        2 * parseInt(props.theme.margin.sm, 0)}px;
    bottom: 0;
    width: ${togglerSizeNormalInt}px;
    margin: ${(props) => props.theme.margin.sm};

    background-color: ${(props) => props.theme.color.background.delta};
    border-radius: 50%;
    transition: right 0.3s ease;

    ${(props) =>
        props.isChecked &&
        css`
            right: ${switchWidthNormal};
        `}

    ${(props) =>
        props.isDisabled &&
        css`
            background-color: ${props.theme.color.background.delta};
        `}
 
  ${(props) =>
        props.size === 'small' &&
        css`
            width: ${togglerSizeSmall};
            right: ${parseInt(switchWidthSmall, 0) -
            parseInt(togglerSizeSmall, 0) -
            2 * parseInt(props.theme.margin.sm, 0)}px;
            font-size: 12px;
        `}
  
   ${(props) =>
        props.size === 'small' &&
        props.isChecked &&
        css`
            right: ${switchWidthSmall};
        `}
   
   ${(props) =>
        props.size === 'large' &&
        css`
            width: ${togglerSizeLarge};
            right: ${parseInt(switchWidthLarge, 0) -
            parseInt(togglerSizeLarge, 0) -
            2 * parseInt(props.theme.margin.sm, 0)}px;
            font-size: 16px;
        `}
   
   ${(props) =>
        props.size === 'large' &&
        props.isChecked &&
        css`
            right: ${switchWidthLarge};
        `}
   
   ${(props) =>
        props.size === 'medium' &&
        css`
            width: ${togglerSizeNormal};
            right: ${(props) =>
                switchWidthNormalInt -
                togglerSizeNormalInt -
                2 * parseInt(props.theme.margin.sm, 0)}px;
            font-size: 14px;
        `}
   ${(props) =>
        props.size === 'medium' &&
        props.isChecked &&
        css`
            right: ${switchWidthNormal};
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
    color: ${(props) => props.theme.color.text.alpha};
    background-color: ${(props) => props.theme.color.border};
    transition: background-color 0.3s ease, color 0.3s ease;
    ${(props) =>
        props.isChecked &&
        css`
            color: ${(props) => props.theme.color.text.gamma};
        `}

    ${(props) =>
        props.isDisabled &&
        css`
            color: ${props.theme.color.text.gamma};
        `}
   
   ${(props) =>
        props.isDisabled &&
        props.htmlType &&
        css`
            color: ${props.theme.color.text.gamma};
        `}
`;

StyledSwitchLabel.displayName = 'StyledSwitchLabel';
StyledSwitcherWrap.displayName = 'StyledSwitcherWrap';
StyledSwitcherTrue.displayName = 'StyledSwitcherTrue';
StyledSwitchLabel.displayName = 'StyledSwitchLabel';
StyledSwitcherToggler.displayName = 'StyledSwitcherToggler';
StyledSwitcherFalse.displayName = 'StyledSwitcherFalse';
