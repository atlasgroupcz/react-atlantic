import styled, { css } from 'styled-components';
import { StyledIcon } from '../../../../Icon';
import { MessageProps } from '../../../types';
import { StyledText, StyledStrongText } from '../../../../Typography';
import { StyledLink } from '../../../../Typography/Link';

export const StyledNotificationIconContainer = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.padding.md};

    ${StyledIcon} {
        color: ${({ theme }) => theme.color.text.gamma};
    }
`;

export const StyledNotificationTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    word-break: break-word;

    ${StyledStrongText} {
        margin: 0;
    }

    ${StyledText} {
        margin: 0;
        font-size: ${({ theme }) => theme.font.size.sm};
        color: ${({ theme }) => theme.color.text.beta};
    }
`;

export const StyledNotificationMainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${({ theme }) => theme.padding.md};
    background-color: ${({ theme }) => theme.color.background.alpha};

    ${StyledLink} {
        margin-left: ${({ theme }) => theme.margin.xl};
        font-size: ${({ theme }) => theme.font.size.sm};
    }
`;

export const StyledNotification = styled.div<MessageProps>`
    overflow: hidden;
    display: inline-flex;
    width: 350px;
    min-height: 50px;
    background-color: ${({ theme }) => theme.color.background.alpha};
    box-shadow: ${({ theme }) => theme.boxShadow.md};
    border-radius: ${({ theme }) => theme.radius};
    cursor: default;

    ${({ theme, type }) => {
        switch (type) {
            case 'default': {
                return css`
                    ${StyledNotificationIconContainer} {
                        background-color: ${theme.color.default};
                    }

                    ${StyledIcon} {
                        color: ${theme.color.text.alpha};
                    }
                `;
            }
            case 'primary': {
                return css`
                    ${StyledNotificationIconContainer} {
                        background-color: ${theme.color.info.alpha};
                    }

                    ${StyledLink} {
                        color: ${theme.color.info.alpha};
                    }
                `;
            }
            case 'success':
            case 'error':
            case 'warning':
            case 'info': {
                return css`
                    ${StyledNotificationIconContainer} {
                        background-color: ${theme.color[type].alpha};
                    }

                    ${StyledLink} {
                        color: ${theme.color[type].alpha};
                    }
                `;
            }
        }
    }}
`;

StyledNotification.displayName = 'StyledNotificationContainer';
StyledNotificationIconContainer.displayName = 'StyledNotificationIconContainer';
StyledNotificationTextContainer.displayName = 'StyledNotificationTextContainer';
