import { FC } from 'react';
import { Text, TextProps } from './Text';
import { Title, TitleProps } from './Title';

type Typography = {
    Text: FC<TextProps>;
    Title: FC<TitleProps>;
};

export const Typography: Typography = {
    Text,
    Title,
};
