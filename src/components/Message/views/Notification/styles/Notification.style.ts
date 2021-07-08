import styled, { css } from 'styled-components';
import { StyledIcon } from '../../../../Icon';
import { MessageProps } from '../../../types';

export const StyledNotificationIconContainer = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.padding.lg}
        ${({ theme }) => theme.padding.md};

    ${StyledIcon} {
        color: ${({ theme }) => theme.color.text.gamma};
    }
`;

export const StyledNotificationTextContainer = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.padding.md};
    background-color: ${({ theme }) => theme.color.background.alpha};
`;

export const StyledNotificationContainer = styled.div<MessageProps>`
    overflow: hidden;
    display: inline-flex;
    margin-bottom: ${({ theme }) => theme.padding.sm};
    background-color: ${({ theme }) => theme.color.background.alpha};
    box-shadow: ${({ theme }) => theme.boxShadow.md};
    border-radius: ${({ theme }) => theme.radius};
    cursor: default;

    ${({ theme, type }) =>
        type === 'default' &&
        css`
            ${StyledNotificationIconContainer} {
                background-color: ${theme.color.default};
            }

            ${StyledIcon} {
                color: ${({ theme }) => theme.color.text.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'primary' &&
        css`
            ${StyledNotificationIconContainer} {
                background-color: ${theme.color.primary.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'success' &&
        css`
            ${StyledNotificationIconContainer} {
                background-color: ${theme.color.success.alpha};
            }
        `}
  
    ${({ theme, type }) =>
        type === 'warning' &&
        css`
            ${StyledNotificationIconContainer} {
                background-color: ${theme.color.warning.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'error' &&
        css`
            ${StyledNotificationIconContainer} {
                background-color: ${theme.color.error.alpha};
            }
        `}

    ${({ theme, type }) =>
        type === 'info' &&
        css`
            ${StyledNotificationIconContainer} {
                background-color: ${theme.color.info.alpha};
            }
        `}
`;

StyledNotificationContainer.displayName = 'StyledNotificationContainer';
StyledNotificationIconContainer.displayName = 'StyledNotificationIconContainer';
StyledNotificationTextContainer.displayName = 'StyledNotificationTextContainer';
