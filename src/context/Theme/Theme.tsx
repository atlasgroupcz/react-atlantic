import {
    ThemeProvider as StyledThemeProvider,
    BaseThemeProviderComponent,
} from 'styled-components';
import { ThemeType } from '../../theme/theme';
import { ComponentProps } from 'react';

export const ThemeProvider: BaseThemeProviderComponent<ThemeType> = StyledThemeProvider;
export type ThemeProviderProps = ComponentProps<typeof ThemeProvider>;
