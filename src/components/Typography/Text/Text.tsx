import React, { FC, forwardRef } from 'react';
import {
    StyledCodeText,
    StyledDelText,
    StyledMarkText,
    StyledStrongText,
    StyledText,
} from './style';
import { TextProps } from './types';

const elements = {
    span: StyledText,
    strong: StyledStrongText,
    code: StyledCodeText,
    del: StyledDelText,
    mark: StyledMarkText,
};

export const Text: FC<TextProps> = forwardRef(
    ({ element = 'span', ...props }, ref) => {
        const Component = elements[element] ?? elements['span'];
        return <Component ref={ref} {...props} />;
    }
);
