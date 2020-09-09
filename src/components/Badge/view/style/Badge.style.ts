import styled, { css } from 'styled-components';
import { BadgeProps } from '../../types/Badge.types';

import { excludeIntrinsicElementProps } from '../../../../utils/excludeProps';

const badgePropKeys: (keyof BadgeProps)[] = ['size', 'type'];
const badgeIntrinsicExclude = excludeIntrinsicElementProps<BadgeProps>();

export const StyledBadge = styled(badgeIntrinsicExclude('sup', badgePropKeys))`
    display: inline-block;
    text-align: center;
    color: ${(props) => props.theme.color.text.alpha};
    font-family: ${(props) => props.theme.font.family};
    font-weight: 400;
    background-color: ${(props) => props.theme.color.default};
    border-radius: ${(props) => props.theme.radius};

    ${(props) =>
        props.type === 'primary' &&
        css`
            background-color: ${props.theme.color.primary.alpha};
            color: ${props.theme.color.text.gamma};
        `}

    ${(props) =>
        props.type === 'success' &&
        css`
            background-color: ${props.theme.color.success.alpha};
            color: ${props.theme.color.text.gamma};
        `}
    
  ${(props) =>
        props.type === 'warning' &&
        css`
            background-color: ${props.theme.color.warning.alpha};
            color: ${props.theme.color.text.gamma};
        `}
    
  ${(props) =>
        props.type === 'error' &&
        css`
            background-color: ${props.theme.color.error.alpha};
            color: ${props.theme.color.text.gamma};
        `}

  ${(props) =>
        props.size === 'small' &&
        css`
            padding: 2px ${props.theme.padding.sm};

            font-size: ${props.theme.font.size.sm};
        `}
  
    ${(props) =>
        props.size === 'medium' &&
        css`
            padding: ${props.theme.padding.sm}
                ${parseInt(props.theme.padding.md, 0) - 2}px;
            font-size: ${props.theme.font.size.md};
        `}
    
      ${(props) =>
        props.size === 'large' &&
        css`
            padding: ${props.theme.padding.md}
                ${parseInt(props.theme.padding.lg, 0) - 2}px;
            font-size: ${props.theme.font.size.lg};
        `}
`;
