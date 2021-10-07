import styled, { css } from 'styled-components';
import { Icon } from '../../../../Icon';
import { StyledText } from '../../../../Typography';
import { MessageProps } from '../../../types';

export const StyledMessageLightIcon = styled(Icon)<MessageProps>`
    flex-shrink: 0;
    margin-right: ${({ theme }) => theme.padding.md};
`;

export const StyledMessageLightContainer = styled.div<MessageProps>`
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => theme.padding.sm}
        ${({ theme }) => theme.padding.md};
    margin-bottom: ${({ theme }) => theme.padding.sm};
    box-shadow: ${({ theme }) => theme.boxShadow.md};
    border-radius: ${({ theme }) => theme.radius};
    cursor: default;

    ${StyledText} {
        margin: 0;
        color: ${({ theme }) => theme.color.text.alpha};
    }

    ${({ theme, type }) =>
        type === 'default' &&
        css`
            background-color: ${theme.color.background.alpha};
        `}

    ${({ theme, type }) =>
        type === 'primary' &&
        css`
            background-color: ${theme.color.primary.epsilon};
            border: 1px solid ${theme.color.primary.alpha};

            ${StyledMessageLightIcon} {
                color: ${theme.color.primary.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'success' &&
        css`
            background-color: ${theme.color.success.epsilon};
            border: 1px solid ${theme.color.success.alpha};

            ${StyledMessageLightIcon} {
                color: ${theme.color.success.alpha};
            }
        `}
  
    ${({ theme, type }) =>
        type === 'warning' &&
        css`
            background-color: ${theme.color.warning.epsilon};
            border: 1px solid ${theme.color.warning.alpha};

            ${StyledMessageLightIcon} {
                color: ${theme.color.warning.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'error' &&
        css`
            background-color: ${theme.color.error.epsilon};
            border: 1px solid ${theme.color.error.alpha};

            ${StyledMessageLightIcon} {
                color: ${theme.color.error.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'info' &&
        css`
            background-color: ${theme.color.info.epsilon};
            border: 1px solid ${theme.color.info.alpha};

            ${StyledMessageLightIcon} {
                color: ${theme.color.info.alpha};
            }
        `}
`;

StyledMessageLightContainer.displayName = 'StyledLightMessageContainer';
StyledMessageLightIcon.displayName = 'StyledLightMessageIcon';
