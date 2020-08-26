import React, { FC, PropsWithChildren } from 'react';
import { CommonHTMLProps } from '../../../types/HTMLProps';
import { StyledParagraph } from './style';
import { MouseEvents } from '../../../types';

export type ParagraphProps = {} & CommonHTMLProps<HTMLParagraphElement> &
    MouseEvents<HTMLParagraphElement>;

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
    children,
    ...props
}) => {
    return <StyledParagraph {...props}>{children}</StyledParagraph>;
};
