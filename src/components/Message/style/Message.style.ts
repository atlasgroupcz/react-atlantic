import styled, { css } from 'styled-components';
import { Icon } from '../../Icon';
import { StyledText } from '../../Typography/Text/Text.style';
import { StyledMessageProps } from '../types/StyledMessageProps';

export const StyledMessageContainer = styled.div<StyledMessageProps>`
    display: inline-flex;
    align-items: center;
    padding: ${(props) => props.theme.padding.md};
    margin-bottom: ${(props) => props.theme.padding.sm};
    box-shadow: ${(props) => props.theme.boxShadow.md};
    border-radius: ${(props) => props.theme.radius};
    cursor: default;

    ${StyledText} {
        margin: 0;
        color: ${(props) => props.theme.color.text.gamma};
    }

    ${(props) =>
        props.type === 'default' &&
        css`
            background-color: ${props.theme.color.background.alpha};

            ${StyledText} {
                color: ${props.theme.color.text.alpha};
            }
        `}

    ${(props) =>
        props.type === 'primary' &&
        css`
            background-color: ${props.theme.color.primary.alpha};
        `}

    ${(props) =>
        props.type === 'success' &&
        css`
            background-color: ${props.theme.color.success.alpha};
        `}
  
  ${(props) =>
        props.type === 'warning' &&
        css`
            background-color: ${props.theme.color.warning.alpha};
        `}

  ${(props) =>
        props.type === 'error' &&
        css`
            background-color: ${props.theme.color.error.alpha};
        `}

    ${(props) =>
        props.isTransparent &&
        css`
            background-color: ${props.theme.color.background.alpha};

            ${StyledText} {
                color: ${(props) => props.theme.color.text.alpha};
            }
        `}
`;
export const StyledMessageIcon = styled(Icon)<StyledMessageProps>`
    margin-right: ${(props) => props.theme.padding.md};

    ${(props) =>
        props.name === 'loading' &&
        css`
            width: 14px;
            height: 14px;
            margin: 0;
        `}

    ${(props) =>
        !props.isTransparent &&
        css`
            color: ${props.theme.color.text.gamma};
        `}

    ${(props) =>
        props.type === 'primary' &&
        props.isTransparent &&
        css`
            color: ${props.theme.color.primary.alpha};
        `}
  
  ${(props) =>
        props.type === 'success' &&
        props.isTransparent &&
        css`
            && {
                color: ${props.theme.color.success.alpha};
            }
        `}
  
  ${(props) =>
        props.type === 'warning' &&
        props.isTransparent &&
        css`
            color: ${props.theme.color.warning.alpha};
        `}
  
  ${(props) =>
        props.type === 'error' &&
        props.isTransparent &&
        css`
            color: ${props.theme.color.error.alpha};
        `}
`;

export const StyledMessageIconLoading = styled(Icon)<StyledMessageProps>`
    cursor: default;
    position: absolute;
    top: 13px;
    left: 10px;

    ${(props) =>
        props.name === 'loading' &&
        css`
            width: 14px;
            height: 14px;
            margin: 0;
        `}

    ${(props) =>
        props.type === 'primary' &&
        css`
            color: ${props.theme.color.primary.alpha};
        `}
  
  ${(props) =>
        props.type === 'success' &&
        css`
            color: ${props.theme.color.success.alpha};
        `}
  
  ${(props) =>
        props.type === 'warning' &&
        css`
            color: ${props.theme.color.warning.alpha};
        `}
  
  ${(props) =>
        props.type === 'error' &&
        css`
            color: ${props.theme.color.error.alpha};
        `}
`;
export const StyledMessageContentSpan = styled.span<StyledMessageProps>``;

StyledMessageContainer.displayName = 'StyledMessageContainer';
StyledMessageIcon.displayName = 'StyledMessageIcon';
StyledMessageIconLoading.displayName = 'StyledMessageIconLoading';
StyledMessageContentSpan.displayName = 'StyledMessageContentSpan';
