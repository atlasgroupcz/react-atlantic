import styled, { css } from 'styled-components';
import { StyledSelectProps } from '../../types';
import { theme } from '../../../../theme';
import { excludeIntrinsicElementProps } from '../../../../utils/excludeProps';
import React, { forwardRef } from 'react';

const selectIntrinsicExclude = excludeIntrinsicElementProps<
    StyledSelectProps
>();
const selectPropKeys: (keyof StyledSelectProps)[] = [
    'size',
    'isDisabled',
    'isFocused',
    'isFullWidth',
    'isMenuOpened',
    'isMulti',
    'size',
];

export const SelectContainer = styled(
    selectIntrinsicExclude('div', selectPropKeys)
)`
    position: relative;
    width: 220px;
    line-height: 1;

    font-size: ${(props) => props.theme.font.size.md};
    font-family: ${(props) => props.theme.font.family};

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    ${(props) =>
        props.isFullWidth &&
        css`
            width: 100%;
        `}

    ${(props) =>
        props.size === 'small' &&
        css`
            font-size: ${(props) => props.theme.font.size.sm};
        `}
  
  ${(props) =>
        props.size === 'large' &&
        css`
            font-size: ${(props) => props.theme.font.size.lg};
        `}
`;

export const Control = styled(selectIntrinsicExclude('div', selectPropKeys))`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding-left: ${(props) => props.theme.padding.md};
    border: 1px solid ${(props) => props.theme.color.border};
    border-radius: ${(props) => props.theme.radius};
    background-color: ${(props) => props.theme.color.background.alpha};

    :hover {
        border: 1px solid ${(props) => props.theme.color.primary.alpha};
    }

    ${(props) =>
        props.isFocused &&
        css`
            border-color: ${(props) => props.theme.color.primary.alpha};
        `}

    ${(props) =>
        !props.isFocused &&
        css`
            border-color: ${(props) => props.theme.color.border};
        `}
  
  ${(props) =>
        props.isDisabled &&
        css`
            color: ${props.theme.color.text.beta};

            ::placeholder {
                color: ${props.theme.color.text.beta};
            }

            background-color: ${props.theme.color.default};
            cursor: not-allowed;
            outline: 0;

            &:hover,
            &:focus {
                outline: 0;
                box-shadow: none;
                border: 1px solid ${props.theme.color.border};
            }
        `}
  
  ${(props) =>
        props.isMenuOpened &&
        css`
            border-bottom: 1px solid ${(props) => props.theme.color.border};
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        `}
  
  ${(props) =>
        props.isMulti &&
        props.hasValue &&
        css`
            padding-left: 0;
        `}
  
  ${(props) =>
        props.isFullWidth &&
        css`
            width: 100%;
        `}
`;

export const SelectContainerWrapper = styled(
    selectIntrinsicExclude('span', selectPropKeys)
)`
    font-family: ${(props) => props.theme.font.family};
    display: inline-block;
    position: relative;
    margin-top: -${(props) => (props.isMulti ? '18px' : props.theme.margin.md)};
    padding-top: ${(props) =>
        props.isMulti ? '18px' : props.theme.padding.md};

    ${(props) =>
        props.isFocused &&
        css`
            ${Control} {
                border: 1px solid ${(props) => props.theme.color.primary.alpha};
            }
        `}

    ${(props) =>
        !props.isFocused &&
        css`
            ${Control} {
                border: 1px solid ${(props) => props.theme.color.border};
            }
        `}
  
  :hover {
        ${Control} {
            border: 1px solid ${(props) => props.theme.color.primary.alpha};
        }
    }

    label {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 ${(props) => props.theme.padding.md};
        border-radius: ${(props) => props.theme.radius};

        color: ${(props) => props.theme.color.text.beta};
        cursor: pointer;
        border: ${(props) => props.theme.radius};

        -webkit-transition: color 10s ease-in-out, transform 10s ease-in-out;
        transition: color 10s ease-in-out, transform 10s ease-in-out;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: ${(props) =>
            props.isMulti ? 'translateY(18px)' : 'translateY(12px)'};
        transform: ${(props) =>
            props.isMulti ? 'translateY(18px)' : 'translateY(12px)'};

        ${(props) =>
            props.size === 'small' &&
            css`
                font-size: ${props.theme.font.size.sm};
                height: ${parseInt(props.theme.height.sm, 0) - 2}px;
                line-height: ${parseInt(props.theme.height.sm, 0) - 2}px;
            `}
        ${(props) =>
            props.size === 'medium' &&
            css`
                font-size: ${props.theme.font.size.md};
                height: ${parseInt(props.theme.height.md, 0) - 2}px;
                line-height: ${parseInt(props.theme.height.md, 0) - 2}px;
            `}
    ${(props) =>
            props.size === 'large' &&
            css`
                font-size: ${props.theme.font.size.lg};
                height: ${parseInt(props.theme.height.lg, 0) - 2}px;
                line-height: ${parseInt(props.theme.height.lg, 0) - 2}px;
            `}

    ${(props) =>
            (props.isFocused || props.hasValue) &&
            css`
                height: ${props.theme.height.sm};
                line-height: ${props.theme.height.sm};
                left: 5px;
                right: auto;

                background: ${props.theme.color.background.alpha};
                color: ${props.theme.color.primary.alpha};

                -webkit-transform: translateY(-14px) scale(0.8);
                transform: translateY(0px) scale(0.8);
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;

                ${props.size === 'small' &&
                css`
                    height: 16px;
                    line-height: 16px;
                `}
            `}
    }

    ${(props) =>
        props.isFullWidth &&
        css`
            width: 100%;
        `}
`;

export const ValueContainer = styled(
    selectIntrinsicExclude('div', selectPropKeys)
)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 100% 1;

    ${(props) =>
        props.isMulti &&
        css`
            max-width: calc(100% - 67px);
        `}

    ${(props) =>
        props.isFullWidth &&
        !props.isMulti &&
        css`
            max-width: calc(100% - 36px);
        `}
`;

export const SingleValue = styled(
    selectIntrinsicExclude('div', selectPropKeys)
)`
    display: block;
    max-width: 165px;
    height: 32px;
    padding: ${(props) => props.theme.padding.sm}
        ${(props) => props.theme.padding.sm}
        ${(props) => props.theme.padding.sm} 0;

    border-radius: ${(props) => props.theme.radius};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    span {
        color: ${(props) => props.theme.color.text.alpha};
    }

    ${(props) =>
        props.isFullWidth &&
        css`
            max-width: calc(100% - 2px);
        `}

    ${(props) =>
        props.size === 'small' &&
        css`
            height: 24px;
            padding: 3px 3px 3px 0;

            span {
                font-size: ${(props) => props.theme.font.size.sm};
            }
        `}
  
  ${(props) =>
        props.size === 'large' &&
        css`
            height: 38px;
            padding: 7px 7px 7px 0;

            span {
                font-size: ${(props) => props.theme.font.size.lg};
            }
        `}
`;

export const MultiValue = styled(selectIntrinsicExclude('div', selectPropKeys))`
    display: flex;
    max-width: calc(100% - 6px);
    height: 28px;
    margin: ${(props) => props.theme.margin.xs};
    padding: 0;

    background-color: ${(props) => props.theme.color.primary.beta};
    color: ${(props) => props.theme.color.text.alpha};
    border: 1px solid ${(props) => props.theme.color.primary.alpha};
    border-radius: ${(props) => props.theme.radius};

    span {
        margin: 0;
        padding: 0 ${(props) => props.theme.padding.sm};
        line-height: 26px;

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    span,
    i {
        color: ${(props) => props.theme.color.text.gamma};
    }

    ${(props) =>
        props.size === 'small' &&
        css`
            height: 20px;
            padding: 0;

            span {
                line-height: 18px;
                font-size: ${(props) => props.theme.font.size.sm};
            }
        `}

    ${(props) =>
        props.size === 'large' &&
        css`
            height: ${(props) => props.theme.height.md};
            padding: 0;

            span {
                line-height: 32px;
                font-size: ${(props) => props.theme.font.size.lg};
            }
        `}
`;

export const ClearIndicator = styled(
    selectIntrinsicExclude('div', selectPropKeys)
)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.theme.width.md};
    color: ${(props) => props.theme.color.text.beta};

    i,
    span {
        color: ${(props) => props.theme.color.text.beta};
    }

    i:hover {
        color: ${(props) => props.theme.color.error.alpha};
    }

    ${(props) =>
        props.isDisabled &&
        css`
            i:hover {
                color: ${props.theme.color.text.beta};
            }
        `}
`;

export const MultiValueLabel = styled.div`
    padding: 0 ${(props) => props.theme.padding.sm};
`;

export const MultiValueRemove = styled(
    selectIntrinsicExclude('div', selectPropKeys)
)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 26px;
    border-left: 1px solid ${(props) => props.theme.color.primary.alpha};

    span,
    i {
        color: ${(props) => props.theme.color.text.gamma};
    }

    i {
        width: 10px;

        &:hover {
            color: ${(props) => props.theme.color.error.alpha};
        }
    }

    ${(props) =>
        props.isDisabled &&
        css`
            i:hover {
                color: ${props.theme.color.text.beta};
            }
        `}
`;

export const NoOptionsMessage = styled.div`
    display: block;
    padding: 0 ${(props) => props.theme.padding.md};
    height: ${(props) => props.theme.height.md};
    line-height: ${(props) => props.theme.height.md};
    color: ${(props) => props.theme.color.text.beta};

    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`;

export const CrossIcon = styled.button``;

export const Placeholder = styled.div`
    color: ${(props) => props.theme.color.text.beta};
`;

export const IndicatorsContainer = styled(
    selectIntrinsicExclude('div', selectPropKeys)
)`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    align-self: stretch;
    flex-shrink: 0;
    min-height: 32px;

    i {
        font-size: ${(props) => props.theme.font.size.md};
    }

    ${(props) =>
        props.size === 'small' &&
        css`
            min-height: 24px;

            i {
                font-size: ${(props) => props.theme.font.size.sm};
            }
        `}

    ${(props) =>
        props.size === 'large' &&
        css`
            min-height: 38px;

            i {
                font-size: ${(props) => props.theme.font.size.lg};
            }
        `}
`;

export const DropdownIndicator = styled(
    selectIntrinsicExclude('div', selectPropKeys)
)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.theme.width.md};
    color: ${(props) => props.theme.color.text.beta};

    i {
        color: ${(props) => props.theme.color.text.beta};
    }

    i:hover {
        color: ${(props) => props.theme.color.primary.alpha};
    }

    ${(props) =>
        props.isDisabled &&
        css`
            i:hover {
                color: ${props.theme.color.text.beta};
            }
        `}
`;

export const IndicatorSeparator = styled.div`
    align-self: stretch;
    background-color: ${(props) => props.theme.color.border};
    margin: ${(props) => props.theme.margin.sm} 0;
    width: 1px;
    box-sizing: border-box;
`;

export const Menu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 2;
`;

export const MenuList = styled.div`
    overflow-y: scroll;
    max-height: 175px;
    border: 1px solid ${(props) => props.theme.color.primary.alpha};
    border-top: 0;
    border-radius: 0 0 ${(props) => props.theme.radius}
        ${(props) => props.theme.radius};
    background: ${(props) => props.theme.color.background.alpha};
    outline-offset: -2px;
`;

export const StyledOption = styled(
    forwardRef<
        HTMLDivElement,
        StyledSelectProps & JSX.IntrinsicElements['div']
    >(({ size, ...props }, ref) => <div {...props} ref={ref} />)
)`
    display: block;
    padding: 0 ${(props) => props.theme.padding.md};
    height: ${(props) => props.theme.height.md};
    line-height: ${(props) => props.theme.height.md};
    background-color: ${(props) => props.theme.color.background.alpha};
    color: ${(props) => props.theme.color.text.alpha};

    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:nth-child(odd) {
        background-color: ${(props) => props.theme.color.background.gamma};
    }

    &:hover {
        background-color: ${(props) => props.theme.color.background.beta};
    }

    span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    ${(props) =>
        props.size === 'small' &&
        css`
            height: ${(props) => props.theme.height.sm};
            line-height: ${(props) => props.theme.height.sm};

            span {
                font-size: ${(props) => props.theme.font.size.sm};
            }
        `}

    ${(props) =>
        props.size === 'large' &&
        css`
            height: ${(props) => props.theme.height.lg};
            line-height: ${(props) => props.theme.height.lg};

            span {
                font-size: ${(props) => props.theme.font.size.lg};
            }
        `}
`;

StyledOption.defaultProps = {
    theme,
};

SelectContainer.defaultProps = {
    theme,
};

Control.defaultProps = {
    theme,
};

Control.displayName = 'Control';

ValueContainer.defaultProps = {
    theme,
};
SingleValue.defaultProps = {
    theme,
};
MultiValue.defaultProps = {
    theme,
};
ClearIndicator.defaultProps = {
    theme,
};
MultiValueLabel.defaultProps = {
    theme,
};
MultiValueRemove.defaultProps = {
    theme,
};

NoOptionsMessage.defaultProps = {
    theme,
};
CrossIcon.defaultProps = {
    theme,
};
Placeholder.defaultProps = {
    theme,
};

SelectContainerWrapper.defaultProps = {
    theme,
};

IndicatorSeparator.defaultProps = {
    theme,
};

IndicatorsContainer.defaultProps = {
    theme,
};

DropdownIndicator.defaultProps = {
    theme,
};
