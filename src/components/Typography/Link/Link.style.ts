import styled from 'styled-components';
import { StyledText } from '../Text/Text.style';
import {
    StyledTitle1,
    StyledTitle2,
    StyledTitle3,
    StyledTitle4,
    StyledTitle5,
} from '../Title/Title.style';

export const StyledLink = styled.a`
  font-size: ${(props) => props.theme.font.size.md};
  font-family: ${(props) => props.theme.font.family};
  color: ${(props) => props.theme.color.primary.alpha};
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: inherit;
  font-style: inherit;
  vertical-align: baseline;

  &:hover {
    text-decoration: underline;
  }

  ::selection,
  ::-moz-selection {
    background: ${(props) => props.theme.color.primary.delta};
  }
  
  ${StyledText},${StyledTitle1},${StyledTitle2},${StyledTitle3},${StyledTitle4},${StyledTitle5}{
    color: ${(props) => props.theme.color.primary.alpha};
  }
`;
