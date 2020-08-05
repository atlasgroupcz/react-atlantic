import styled, { css } from 'styled-components';

const titleStyle = css`
    color: ${(props) => props.theme.color.text.alpha};
    font-weight: 600;
    font-family: ${(props) => props.theme.font.family};
    ::selection,
    ::-moz-selection {
        background: ${(props) => props.theme.color.primary.delta};
    }
`;

export const StyledTitle1 = styled.h1`
    ${titleStyle};

    font-size: 40px;
    line-height: 1.2;
    margin: ${(props) => props.theme.margin.lg} 0;

    a {
        font-size: 40px;
    }
`;

export const StyledTitle2 = styled.h2`
    ${titleStyle};

    font-size: 32px;
    line-height: 1.3;
    margin: ${(props) => props.theme.margin.md} 0;

    a {
        font-size: 32px;
    }
`;

export const StyledTitle3 = styled.h3`
    ${titleStyle};

    font-size: 26px;
    line-height: 1.3;
    margin: ${(props) => props.theme.margin.md} 0;

    a {
        font-size: 26px;
    }
`;

export const StyledTitle4 = styled.h4`
    ${titleStyle};

    font-size: 18px;
    line-height: 1.4;
    margin: ${(props) => props.theme.margin.sm} 0;

    a {
        font-size: 18px;
    }
`;

export const StyledTitle5 = styled.h5`
    ${titleStyle};

    font-size: 16px;
    line-height: 1.5;
    margin: ${(props) => props.theme.margin.sm} 0;

    a {
        font-size: 16px;
    }
`;
