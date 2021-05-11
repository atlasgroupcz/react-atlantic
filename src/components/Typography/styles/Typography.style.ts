import { css } from 'styled-components';

export const getTypographyDefaultStyles = () => css`
    color: ${({ theme }) => theme.color.text.alpha};
    font-size: ${({ theme }) => theme.font.size.md};
    font-family: ${({ theme }) => theme.font.family};
    line-height: 1.5;
    margin: ${({ theme }) => theme.margin.sm} 0;

    button,
    input[type='text'],
    input[type='number'],
    input[type='email'] {
        margin: 0 ${({ theme }) => theme.margin.sm};
    }

    i {
        color: ${({ theme }) => theme.color.primary.alpha};
    }

    &::selection,
    &::-moz-selection {
        background: ${({ theme }) => theme.color.primary.delta};
    }
`;
