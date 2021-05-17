import styled from 'styled-components';
import { getTypographyDefaultStyles } from '../../styles';
import { ParagraphProps } from '../types';

export const StyledParagraph = styled.p<ParagraphProps>`
    ${getTypographyDefaultStyles()};
`;
