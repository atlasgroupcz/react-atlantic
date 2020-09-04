import styledStyled, {
    css as styledCss,
    keyframes as styledKeyframes,
    ThemedStyledInterface,
    createGlobalStyle as styledCreateGlobalStyle,
} from 'styled-components';
import { ThemeType } from '../theme';

export const css = styledCss;
export const createGlobalStyle = styledCreateGlobalStyle;
export const keyframes = styledKeyframes;
export const styled = styledStyled as ThemedStyledInterface<ThemeType>;
export const createStyled = <T extends ThemeType>() =>
    styledStyled as ThemedStyledInterface<T>;
