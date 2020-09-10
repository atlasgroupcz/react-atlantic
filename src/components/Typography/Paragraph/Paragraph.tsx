import React, { FC, PropsWithChildren } from 'react';
import { StyledParagraph } from './style/Paragraph.style';
import { ParagraphProps } from './types';

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
    children,
    ...props
}) => {
    return <StyledParagraph {...props}>{children}</StyledParagraph>;
};
