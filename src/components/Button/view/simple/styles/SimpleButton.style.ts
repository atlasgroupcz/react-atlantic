import styled, { css } from 'styled-components';
import { SimpleButtonProps } from '../../../types';
import { Button } from '../../default';

export const getButtonSimpleStyles = (
    isAlternative: SimpleButtonProps['isAlternative']
) => css`
    background: none;
    box-shadow: none;
    border: none;

    &:hover {
        background: ${({ theme }) => theme.color.background.beta};
    }

    ${({ theme }) =>
        isAlternative &&
        css`
            &:hover {
                background: ${theme.color.background.alpha};
            }
        `}
`;

export const getButtonSimpleTypeStyles = (
    type: SimpleButtonProps['type']
) => css`
    ${({ theme }) =>
        type === 'primary' &&
        css`
            background: ${theme.color.primary.alpha};

            &:hover {
                background: ${theme.color.primary.beta};
            }
        `}

    ${({ theme }) =>
        type === 'success' &&
        css`
            background: ${theme.color.success.alpha};

            &:hover {
                background: ${theme.color.success.beta};
            }
        `}
    
    ${({ theme }) =>
        type === 'warning' &&
        css`
            background: ${theme.color.warning.alpha};

            &:hover {
                background: ${theme.color.warning.beta};
            }
        `}
    
    ${({ theme }) =>
        type === 'error' &&
        css`
            background: ${theme.color.error.alpha};

            &:hover {
                background: ${theme.color.error.beta};
            }
        `}
    
    ${({ theme }) =>
        type === 'dashed' &&
        css`
            border: 1px dashed ${theme.color.border};
        `}
`;

export const StyledSimpleButton = styled(Button).withConfig({
    shouldForwardProp: (prop) => !['isAlternative'].includes(prop),
})<SimpleButtonProps>`
    ${({ isAlternative = false, type = 'default' }) => css`
        ${getButtonSimpleStyles(isAlternative)};
        ${getButtonSimpleTypeStyles(type)}
    `}
`;
