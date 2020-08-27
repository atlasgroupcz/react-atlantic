import React, { FC } from 'react';
import {
    StyledCodeText,
    StyledDelText,
    StyledMarkText,
    StyledStrongText,
    StyledText,
} from './Text.style';
import { TextProps } from './types';

const elements = {
    span: (props: TextProps) => <StyledText {...props} />,
    strong: (props: TextProps) => <StyledStrongText {...props} />,
    code: (props: TextProps) => <StyledCodeText {...props} />,
    del: (props: TextProps) => <StyledDelText {...props} />,
    mark: (props: TextProps) => <StyledMarkText {...props} />,
};

export const Text: FC<TextProps> = ({ element = 'span', ...props }) => (
    <>{elements[element]?.(props) || elements['span'](props)}</>
);
