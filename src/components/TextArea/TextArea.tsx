import React, { FC, forwardRef } from 'react';
import { StyledTextArea } from './style';
import { TextAreaProps } from './types';

export type InputBaseType = FC<TextAreaProps>;

export const TextArea: InputBaseType = forwardRef<
    HTMLTextAreaElement,
    TextAreaProps
>(({ ...props }, ref) => {
    return <StyledTextArea {...props} ref={ref} />;
});
