import {
    defaultColor,
    defaultSpacing,
    defaultRadius,
    defaultRounded,
    defaultFontSize,
    defaultFontFamily,
    defaultDimensions,
    defaultBoxShadow,
} from './defaults';

export const theme = {
    color: defaultColor,
    padding: defaultSpacing,
    margin: defaultSpacing,
    radius: defaultRadius,
    rounded: defaultRounded,
    font: {
        size: defaultFontSize,
        family: defaultFontFamily,
    },
    height: defaultDimensions,
    width: defaultDimensions,
    boxShadow: defaultBoxShadow,
};
export type DefaultThemeType = typeof theme;
export type ThemeType<T extends DefaultThemeType = DefaultThemeType> = T;
