import styledStyled, {
    css as styledCss,
    keyframes as styledKeyframes,
    ThemedStyledInterface,
    createGlobalStyle as styledCreateGlobalStyle,
    ThemedCssFunction,
    useTheme as useStyledTheme,
} from 'styled-components';
import { ThemeType } from '../theme';

export const css = styledCss as ThemedCssFunction<ThemeType>;
export const createGlobalStyle = styledCreateGlobalStyle;
export const keyframes = styledKeyframes;
export const styled = styledStyled as ThemedStyledInterface<ThemeType>;
export const createStyled = <T extends {}>() =>
    styledStyled as ThemedStyledInterface<T>;

export const useTheme = <T extends ThemeType = ThemeType>() =>
    useStyledTheme() as T;
export const createUseThemeHook = <T extends ThemeType>() => () =>
    useTheme<T>();
