import styled from 'styled-components';
import { getDefaultTypographyStyles } from '../../style';
import { ParagraphProps } from '../Paragraph';

export const StyledParagraph = styled.p<ParagraphProps>`
    ${(props) => getDefaultTypographyStyles(props)};
`;
