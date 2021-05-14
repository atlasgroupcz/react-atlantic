import styled, { css } from 'styled-components';
import { Icon } from '../../../../Icon';
import { StyledText } from '../../../../Typography';
import { StyledMessageProps } from '../../../types/Message.types';

export const StyledMessageContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => !['isReversedColor'].includes(prop),
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

    ${({ theme, isReversedColor }) =>
        isReversedColor &&
        css`
            background-color: ${theme.color.background.alpha};

            ${StyledText} {
                color: ${theme.color.text.alpha};
            }
        `}
`;
export const StyledMessageIcon = styled(Icon).withConfig({
    shouldForwardProp: (prop) => !['isReversedColor'].includes(prop),
})<StyledMessageProps>`
    margin-right: ${({ theme }) => theme.padding.md};

    ${({ theme, isReversedColor }) =>
        !isReversedColor &&
        css`
            color: ${theme.color.text.gamma};
        `}

    ${({ theme, type }) =>
        type === 'default' &&
        css`
            color: ${theme.color.text.alpha};
        `}

    ${({ theme, type, isReversedColor }) =>
        type === 'primary' &&
        isReversedColor &&
        css`
            color: ${theme.color.primary.alpha};
        `}
  
    ${({ theme, type, isReversedColor }) =>
        type === 'success' &&
        isReversedColor &&
        css`
            color: ${theme.color.success.alpha};
        `}
  
    ${({ theme, type, isReversedColor }) =>
        type === 'warning' &&
        isReversedColor &&
        css`
            color: ${theme.color.warning.alpha};
        `}
  
    ${({ theme, type, isReversedColor }) =>
        type === 'error' &&
        isReversedColor &&
        css`
            color: ${theme.color.error.alpha};
        `}
    
    ${({ theme, type, isReversedColor }) =>
        type === 'info' &&
        isReversedColor &&
        css`
            color: ${theme.color.info.alpha};
        `}
`;

StyledMessageContainer.displayName = 'StyledMessageContainer';
StyledMessageIcon.displayName = 'StyledMessageIcon';
