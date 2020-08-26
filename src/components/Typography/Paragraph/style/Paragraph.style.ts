import styled from 'styled-components';
import { ParagraphProps } from '../Paragraph';
import { getDefaultTypographyStyles } from '../../style';

export const StyledParagraph = styled.p<ParagraphProps>`
    ${getDefaultTypographyStyles};
`;
