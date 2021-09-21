import React from 'react';
import { AtlanticProvider, theme, ThemeType } from '../src';
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const darkTheme: ThemeType = {
    ...theme,
    color: {
        ...theme.color,
        text: {
            ...theme.color.text,
            alpha: '#FFF',
        },
    },
};

export const decorators = [
    (Story) => (
        <AtlanticProvider theme={darkTheme}>
            <Story />
        </AtlanticProvider>
    ),
];
