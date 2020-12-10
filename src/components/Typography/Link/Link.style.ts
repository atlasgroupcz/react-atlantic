import styled, { css } from 'styled-components';
import { StyledText } from '../Text/Text.style';
import {
    StyledTitle1,
    StyledTitle2,
    StyledTitle3,
    StyledTitle4,
    StyledTitle5,
} from '../Title/Title.style';
import { getDefaultTypographyStyles } from '../style';

export const getDefaultLinkStyles = () => css`
    ${(props) => getDefaultTypographyStyles(props)};
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    border: 0;
    vertical-align: baseline;

    &:hover {
        text-decoration: underline;
    }

    ${StyledText},${StyledTitle1},${StyledTitle2},${StyledTitle3},${StyledTitle4},${StyledTitle5} {
        color: ${(props) => props.theme.color.primary.alpha};
    }
`;

export const StyledLink = styled.a`
    ${getDefaultLinkStyles()}
`;
