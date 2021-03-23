import React, { FC, forwardRef } from 'react';
import { StyledTextArea } from './styles';
import { TextAreaProps } from './types';

export type TextAreaType = FC<TextAreaProps>;

export const TextArea: TextAreaType = forwardRef<
    HTMLTextAreaElement,
    TextAreaProps
>(({ className, ...props }, ref) => {
    return <StyledTextArea className={className} {...props} ref={ref} />;
});
