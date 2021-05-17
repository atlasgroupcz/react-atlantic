import styled, { css } from 'styled-components';
import { StyledText } from '../../Text/styles';
import {
    StyledTitle1,
    StyledTitle2,
    StyledTitle3,
    StyledTitle4,
    StyledTitle5,
} from '../../Title';
import { getTypographyDefaultStyles } from '../../styles';

export const getLinkDefaultStyles = () => css`
    ${getTypographyDefaultStyles()};
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    border: 0;
    vertical-align: baseline;

    &:hover {
        text-decoration: underline;
    }

    ${StyledText},${StyledTitle1},${StyledTitle2},${StyledTitle3},${StyledTitle4},${StyledTitle5} {
        color: ${({ theme }) => theme.color.primary.alpha};
    }
`;

export const StyledLink = styled.a`
    ${getLinkDefaultStyles()}
`;
