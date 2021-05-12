import styled, { css } from 'styled-components';
import { Size } from '../../../../../types';
import { StyledIcon } from '../../../../Icon';
import { getTypographyDefaultStyles } from '../../../../Typography';

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
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
`;

export const StyledCheckboxInputShown = styled('div').withConfig({
    shouldForwardProp: (prop) => !['isDisabled'].includes(prop),
})<StyledCheckboxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => parseInt(theme.padding.xs, 0) - 1}px;
    background: ${({ theme }) => theme.color.background.alpha};
    border-radius: ${({ theme }) => parseInt(theme.radius, 0) - 1}px;
    border: 1px solid ${({ theme }) => theme.color.border};

    ${({ theme, isDisabled }) =>
        isDisabled &&
        css`
            background-color: ${theme.color.default};
            cursor: not-allowed;
        `}
`;

export const StyledCheckboxLabel = styled.label.withConfig({
    shouldForwardProp: (prop) =>
        !['isDisabled', 'size', 'isChecked'].includes(prop),
})<StyledCheckboxProps>`
    ${getTypographyDefaultStyles()};
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    ${({ theme, isDisabled }) =>
        !isDisabled &&
        css`
            &:hover {
                ${StyledCheckboxInputShown} {
                    border: 1px solid ${theme.color.primary.alpha};
                }
            }
        `};

    ${({ isDisabled }) =>
        isDisabled &&
        css`
            cursor: not-allowed;
        `};

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            height: ${theme.height.sm};
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            height: ${theme.height.md};
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            height: ${theme.height.lg};
        `}
`;

export const StyledCheckboxMark = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        !['isChecked', 'isPartiallyChecked', 'isDisabled'].includes(prop),
})<StyledCheckboxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${({ theme }) => theme.width.xs};
    height: ${({ theme }) => theme.width.xs};
    border-radius: ${({ theme }) => parseInt(theme.radius, 0) - 2}px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.23, 1);

    ${StyledIcon} {
        color: transparent;
        opacity: 0;
    }

    ${({ theme, isChecked, isPartiallyChecked }) =>
        (isChecked || isPartiallyChecked) &&
        css`
            background-color: ${theme.color.primary.alpha};

            ${StyledIcon} {
                opacity: 1;
            }
        `}

    ${({ theme, isChecked }) =>
        isChecked &&
        css`
            ${StyledIcon} {
                color: ${theme.color.text.gamma};
            }
        `}

    ${({ isPartiallyChecked }) =>
        isPartiallyChecked &&
        css`
            ${StyledIcon} {
                color: transparent;
            }
        `}

    ${({ theme, isDisabled }) =>
        isDisabled &&
        css`
            background-color: ${theme.color.background.beta};
            cursor: not-allowed;

            ${StyledIcon} {
                opacity: 0;
            }
        `};

    ${({ theme, isDisabled, isChecked }) =>
        isDisabled &&
        isChecked &&
        css`
            background-color: ${theme.color.background.beta};
            cursor: not-allowed;

            ${StyledIcon} {
                opacity: 1;
                color: ${theme.color.text.alpha};
            }
        `}
`;

export const StyledCheckboxSpan = styled.span.withConfig({
    shouldForwardProp: (prop) => !['isDisabled', 'size'].includes(prop),
})<StyledCheckboxProps>`
    padding: 0 ${({ theme }) => theme.padding.md};
    user-select: none;

    ${({ isDisabled }) =>
        isDisabled &&
        css`
            cursor: not-allowed;
        `}

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            font-size: ${theme.font.size.sm};
        `}
    
    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            font-size: ${theme.font.size.md};
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            font-size: ${theme.font.size.lg};
        `}
`;

HiddenCheckbox.displayName = 'HiddenCheckbox';

StyledCheckboxInputShown.displayName = 'StyledCheckboxInputShown';

StyledCheckboxLabel.displayName = 'StyledCheckboxLabel';

StyledCheckboxMark.displayName = 'StyledCheckboxMark';

StyledCheckboxSpan.displayName = 'StyledCheckboxSpan';
