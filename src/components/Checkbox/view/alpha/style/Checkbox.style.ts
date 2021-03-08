import styled, { css } from 'styled-components';
import { Size } from '../../../../../types';
import { StyledIcon } from '../../../../Icon';
import { getDefaultTypographyStyles } from '../../../../Typography/style';

type StyledCheckboxProps = {
    isChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
    isTextDotted?: boolean;
    name?: string;
    position?: 'right' | 'left';
    size?: Size;
};

export const HiddenCheckbox = styled.input.attrs({
    type: 'checkbox',
})`
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
    position: absolute;
    z-index: -1;
`;

export const StyledCheckboxInputShown = styled('div').withConfig({
    shouldForwardProp: (prop) => !['isDisabled'].includes(prop),
})<StyledCheckboxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${(props) => parseInt(props.theme.padding.xs, 0) - 1}px;
    background: ${(props) => props.theme.color.background.alpha};
    border-radius: ${(props) => parseInt(props.theme.radius, 0) - 1}px;
    border: 1px solid ${(props) => props.theme.color.border};

    ${(props) =>
        props.isDisabled &&
        css`
            background-color: ${props.theme.color.default};
            cursor: not-allowed;
        `}
`;

export const StyledCheckboxLabel = styled.label.withConfig({
    shouldForwardProp: (prop) => !['isDisabled', 'size'].includes(prop),
})<StyledCheckboxProps>`
    ${(props) => getDefaultTypographyStyles(props)};
    display: inline-flex;
    align-items: center;
    height: ${(props) => props.theme.height.sm};
    cursor: pointer;

    ${(props) =>
        !props.isDisabled &&
        css`
            :hover {
                ${StyledCheckboxInputShown} {
                    border: 1px solid ${props.theme.color.primary.alpha};
                }
            }
        `};

    ${(props) =>
        props.isDisabled &&
        css`
            cursor: not-allowed;
        `};

    ${(props) =>
        props.size === 'small' &&
        css`
            height: ${props.theme.height.sm};
        `}

    ${(props) =>
        props.size === 'medium' &&
        css`
            height: ${props.theme.height.md};
        `}
    
    ${(props) =>
        props.size === 'large' &&
        css`
            height: ${props.theme.height.lg};
        `}
`;

export const StyledCheckboxMark = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        !['isChecked', 'isPartiallyChecked', 'isDisabled'].includes(prop),
})<StyledCheckboxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.theme.width.xs};
    min-width: ${(props) => props.theme.width.xs};
    height: ${(props) => props.theme.width.xs};
    min-height: ${(props) => props.theme.width.xs};
    border-radius: ${(props) => parseInt(props.theme.radius, 0) - 2}px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.23, 1);

    ${StyledIcon} {
        color: transparent;
        opacity: 0;
    }

    ${(props) =>
        (props.isChecked || props.isPartiallyChecked) &&
        css`
            background-color: ${props.theme.color.primary.alpha};

            ${StyledIcon} {
                opacity: 1;
            }
        `}

    ${(props) =>
        props.isChecked &&
        css`
            ${StyledIcon} {
                color: ${(props) => props.theme.color.text.gamma};
            }
        `}

    ${(props) =>
        props.isPartiallyChecked &&
        css`
            ${StyledIcon} {
                color: transparent;
            }
        `}

    ${(props) =>
        props.isDisabled &&
        css`
            background-color: ${props.theme.color.background.beta};
            cursor: not-allowed;

            ${StyledIcon} {
                opacity: 1;
                color: ${(props) => props.theme.color.text.beta};
            }
        `};
`;

export const StyledCheckboxSpan = styled.span.withConfig({
    shouldForwardProp: (prop) => !['isDisabled', 'size'].includes(prop),
})<StyledCheckboxProps>`
    padding: 0 ${(props) => props.theme.padding.md};
    user-select: none;
    line-height: 1;

    ${(props) =>
        props.isDisabled &&
        css`
            cursor: not-allowed;
        `}

    ${(props) =>
        props.size === 'small' &&
        css`
            font-size: ${props.theme.font.size.sm};
        `}
    
    ${(props) =>
        props.size === 'medium' &&
        css`
            font-size: ${props.theme.font.size.md};
        `}
    
    ${(props) =>
        props.size === 'large' &&
        css`
            font-size: ${props.theme.font.size.lg};
        `}
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

StyledCheckboxInputShown.displayName = 'StyledCheckboxInputShown';

StyledCheckboxLabel.displayName = 'StyledCheckboxLabel';

StyledCheckboxMark.displayName = 'StyledCheckboxMark';

StyledCheckboxSpan.displayName = 'StyledCheckboxSpan';
