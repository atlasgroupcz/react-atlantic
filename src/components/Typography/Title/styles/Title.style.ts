import styled, { css } from 'styled-components';

export const getTitleDefaultStyles = () => css`
    color: ${({ theme }) => theme.color.text.alpha};
    font-weight: 600;
    font-family: ${({ theme }) => theme.font.family};

    ::selection,
    ::-moz-selection {
        background: ${({ theme }) => theme.color.primary.delta};
    }
`;

export const StyledTitle1 = styled.h1`
    ${getTitleDefaultStyles()}
    font-size: 40px;
    line-height: 1.2;
    margin: ${({ theme }) => theme.margin.lg} 0;

    a {
        font-size: 40px;
    }
`;

export const StyledTitle2 = styled.h2`
    ${getTitleDefaultStyles()}
    font-size: 32px;
    line-height: 1.3;
    margin: ${({ theme }) => theme.margin.md} 0;

    a {
        font-size: 32px;
    }
`;

export const StyledTitle3 = styled.h3`
    ${getTitleDefaultStyles()}
    font-size: 26px;
    line-height: 1.3;
    margin: ${({ theme }) => theme.margin.md} 0;

    a {
        font-size: 26px;
    }
`;

export const StyledTitle4 = styled.h4`
    ${getTitleDefaultStyles()}
    font-size: 18px;
    line-height: 1.4;
    margin: ${({ theme }) => theme.margin.sm} 0;

    a {
        font-size: 18px;
    }
`;

export const StyledTitle5 = styled.h5`
    ${getTitleDefaultStyles()}
    font-size: 16px;
    line-height: 1.5;
    margin: ${({ theme }) => theme.margin.sm} 0;

    a {
        font-size: 16px;
    }
`;
