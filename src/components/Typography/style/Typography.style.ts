import { ThemeType } from '../../../theme';
import { css } from 'styled-components';

export const getDefaultTypographyStyles = (props: { theme: ThemeType }) => css`
    color: ${props.theme.color.text.alpha};
    font-size: ${props.theme.font.size.md};
    font-family: ${props.theme.font.family};
    line-height: 1.5;
    margin: ${props.theme.margin.sm} 0;

    button,
    input[type='text'],
    input[type='number'],
    input[type='email'] {
        margin: 0 ${props.theme.margin.sm};
    }

    i {
        color: ${props.theme.color.primary.alpha};
    }

    ::selection,
    ::-moz-selection {
        background: ${props.theme.color.primary.delta};
    }
`;
