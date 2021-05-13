import styled, { css } from 'styled-components';
import { Icon } from '../../Icon';
import { StyledText } from '../../Typography';
import { StyledMessageProps } from '../types/Message.types';

export const StyledMessageContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isTransparent'].includes(prop),
})<StyledMessageProps>`
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => theme.padding.md};
    margin-bottom: ${({ theme }) => theme.padding.sm};
    box-shadow: ${({ theme }) => theme.boxShadow.md};
    border-radius: ${({ theme }) => theme.radius};
    cursor: default;

    ${StyledText} {
        margin: 0;
        color: ${({ theme }) => theme.color.text.gamma};
    }

    ${({ theme, type }) =>
        type === 'default' &&
        css`
            background-color: ${theme.color.background.alpha};

            ${StyledText} {
                color: ${theme.color.text.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'primary' &&
        css`
            background-color: ${theme.color.primary.alpha};
        `}

    ${({ theme, type }) =>
        type === 'success' &&
        css`
            background-color: ${theme.color.success.alpha};
        `}
  
    ${({ theme, type }) =>
        type === 'warning' &&
        css`
            background-color: ${theme.color.warning.alpha};
        `}

    ${({ theme, type }) =>
        type === 'error' &&
        css`
            background-color: ${theme.color.error.alpha};
        `}

    ${({ theme, type }) =>
        type === 'info' &&
        css`
            background-color: ${theme.color.info.alpha};
        `}

    ${({ theme, isTransparent }) =>
        isTransparent &&
        css`
            background-color: ${theme.color.background.alpha};

            ${StyledText} {
                color: ${theme.color.text.alpha};
            }
        `}
`;
export const StyledMessageIcon = styled(Icon).withConfig({
    shouldForwardProp: (prop) => !['isTransparent'].includes(prop),
})<StyledMessageProps>`
    margin-right: ${({ theme }) => theme.padding.md};

    ${({ theme, isTransparent }) =>
        !isTransparent &&
        css`
            color: ${theme.color.text.gamma};
        `}

    ${({ theme, type }) =>
        type === 'default' &&
        css`
            color: ${theme.color.text.alpha};
        `}

    ${({ theme, type, isTransparent }) =>
        type === 'primary' &&
        isTransparent &&
        css`
            color: ${theme.color.primary.alpha};
        `}
  
    ${({ theme, type, isTransparent }) =>
        type === 'success' &&
        isTransparent &&
        css`
            color: ${theme.color.success.alpha};
        `}
  
    ${({ theme, type, isTransparent }) =>
        type === 'warning' &&
        isTransparent &&
        css`
            color: ${theme.color.warning.alpha};
        `}
  
    ${({ theme, type, isTransparent }) =>
        type === 'error' &&
        isTransparent &&
        css`
            color: ${theme.color.error.alpha};
        `}
`;

StyledMessageContainer.displayName = 'StyledMessageContainer';
StyledMessageIcon.displayName = 'StyledMessageIcon';
