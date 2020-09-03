import React, { FC } from 'react';
import { DeviceProviderProps, DeviceProvider } from '../Device';
import { ThemeProviderProps, ThemeProvider } from '../Theme';
import { ThemeType } from '../../theme';

export interface AtlanticContextState<T extends ThemeType = ThemeType>
    extends DeviceProviderProps,
        ThemeProviderProps<T> {}

export interface AtlanticProviderProps<T extends ThemeType = ThemeType>
    extends AtlanticContextState<T> {}

type AtlanticProviderType<T extends ThemeType = ThemeType> = FC<
    AtlanticProviderProps<T>
>;

/**
 * `AtlanticProvider` creates a context for `styled` theme, this instance uses default typing, for extending the given type, use `createAtlanticProvider<YourThemeType>()` or cast `AtlanticProvider` to AtlanticProviderType<YourThemeType>
 */
export const AtlanticProvider: AtlanticProviderType = ({
    currentDevice,
    devices,
    children,
    theme,
}) => {
    return (
        <DeviceProvider devices={devices} currentDevice={currentDevice}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </DeviceProvider>
    );
};

export const createAtlanticProvider: <T extends ThemeType>() => AtlanticProviderType<
    T
> = <T extends ThemeType>() => AtlanticProvider as AtlanticProviderType<T>;
