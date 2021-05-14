import styled, { css } from 'styled-components';
import { Icon } from '../../../../Icon';
import { StyledText } from '../../../../Typography';
import { StyledMessageProps } from '../../../types';

export const StyledLightMessageIcon = styled(Icon)<StyledMessageProps>`
    margin-right: ${({ theme }) => theme.padding.md};
`;

export const StyledLightMessageContainer = styled.div<StyledMessageProps>`
    display: inline-flex;
    align-items: center;
    padding: ${({ theme }) => theme.padding.md};
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
            background-color: ${theme.color.primary.delta};
            border: 1px solid ${theme.color.primary.alpha};

            ${StyledLightMessageIcon} {
                color: ${theme.color.primary.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'success' &&
        css`
            background-color: ${theme.color.success.delta};
            border: 1px solid ${theme.color.success.alpha};

            ${StyledLightMessageIcon} {
                color: ${theme.color.success.alpha};
            }
        `}
  
    ${({ theme, type }) =>
        type === 'warning' &&
        css`
            background-color: ${theme.color.warning.delta};
            border: 1px solid ${theme.color.warning.alpha};

            ${StyledLightMessageIcon} {
                color: ${theme.color.warning.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'error' &&
        css`
            background-color: ${theme.color.error.delta};
            border: 1px solid ${theme.color.error.alpha};

            ${StyledLightMessageIcon} {
                color: ${theme.color.error.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'info' &&
        css`
            background-color: ${theme.color.info.delta};
            border: 1px solid ${theme.color.info.alpha};

            ${StyledLightMessageIcon} {
                color: ${theme.color.info.alpha};
            }
        `}
`;

StyledLightMessageContainer.displayName = 'StyledLightMessageContainer';
StyledLightMessageIcon.displayName = 'StyledLightMessageIcon';
