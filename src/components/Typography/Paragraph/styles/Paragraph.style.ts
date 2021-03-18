import styled from 'styled-components';
import { getDefaultTypographyStyles } from '../../styles';
import { ParagraphProps } from '../types';

export const StyledParagraph = styled.p<ParagraphProps>`
    ${(props) => getDefaultTypographyStyles(props)};
`;
