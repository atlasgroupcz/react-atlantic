import {
    ThemeProvider as StyledThemeProvider,
    BaseThemeProviderComponent,
} from 'styled-components';
import { ThemeType } from '../../theme';
import { ComponentProps } from 'react';

export const createThemeProvider: <T extends ThemeType>() => BaseThemeProviderComponent<
    T
> = () => StyledThemeProvider;

/**
 * `ThemeProvider` creates a context for `styled` theme, this instance uses default typing, for extending the given type, use `createThemeProvider<YourThemeType>()` or cast `ThemeProvider` to ThemeProviderType<YourThemeType>
 */
export type ThemeProviderType<T extends ThemeType> = BaseThemeProviderComponent<
    T
>;
export const ThemeProvider: ThemeProviderType<ThemeType> = StyledThemeProvider;
export type ThemeProviderProps<
    T extends ThemeType = ThemeType
> = ComponentProps<ThemeProviderType<T>>;
