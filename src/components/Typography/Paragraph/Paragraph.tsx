import React, { FC, PropsWithChildren } from 'react';
import { StyledParagraph } from './styles/Paragraph.style';
import { ParagraphProps } from './types';

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <StyledParagraph className={className} {...props}>
            {children}
        </StyledParagraph>
    );
};
