import React, { FC, forwardRef } from 'react';
import { StyledTextArea } from './style';
import { TextAreaProps } from './types';

export type TextAreaType = FC<TextAreaProps>;

export const TextArea: TextAreaType = forwardRef<
    HTMLTextAreaElement,
    TextAreaProps
>(({ ...props }, ref) => {
    return <StyledTextArea {...props} ref={ref} />;
});
