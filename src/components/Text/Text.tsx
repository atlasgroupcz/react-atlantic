import React, { FC } from 'react';
import {
  StyledCodeText,
  StyledDelText,
  StyledMarkText,
  StyledStrongText,
  StyledText,
  StyledTextPropsWithType,
} from './Text.style';

//TODO: type text
type TextProps = {
  element: 'span' | 'strong' | 'code' | 'del' | 'mark';
  // | 'ins';
} & StyledTextPropsWithType;

export const Text: FC<TextProps> = ({ element, ...props }) => {
  switch (element) {
    case 'span':
      return <StyledText {...props} />;
    case 'strong':
      return <StyledStrongText {...props} />;
    case 'code':
      return <StyledCodeText {...props} />;
    case 'del':
      return <StyledDelText {...props} />;
    case 'mark':
      return <StyledMarkText {...props} />;
    // case 'ins':
    //   return <StyledInsText {...props} />;
  }
};
