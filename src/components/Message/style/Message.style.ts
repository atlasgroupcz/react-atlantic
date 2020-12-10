import styled, { css } from 'styled-components';
import {
    excludeComponentProps,
    excludeIntrinsicElementProps,
} from '../../../utils/excludeProps';
import { Icon } from '../../Icon';
import { StyledText } from '../../Typography/Text/Text.style';
import { StyledMessageProps } from '../types/StyledMessageProps';

const intrinsicElementExclude = excludeIntrinsicElementProps<
    StyledMessageProps
>();

const componentExclude = excludeComponentProps<StyledMessageProps>();

export const StyledMessageContainer = styled(
    intrinsicElementExclude('div', ['isTransparent'])
)<StyledMessageProps>`
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
export const StyledMessageIcon = styled(
    componentExclude(Icon, ['isTransparent'])
)<StyledMessageProps>`
    margin-right: ${(props) => props.theme.padding.md};

    ${(props) =>
        !props.isTransparent &&
        css`
            color: ${props.theme.color.text.gamma};
        `}

    ${(props) =>
        props.type === 'default' &&
        css`
            color: ${props.theme.color.text.alpha};
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
            color: ${props.theme.color.success.alpha};
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

StyledMessageContainer.displayName = 'StyledMessageContainer';
StyledMessageIcon.displayName = 'StyledMessageIcon';
