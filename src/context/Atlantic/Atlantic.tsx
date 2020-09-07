import React, { FC } from 'react';
import { DeviceProviderProps, DeviceProvider } from '../Device';
import { ThemeProviderProps, ThemeProvider } from '../Theme';
import { ThemeType } from '../../theme';

export interface AtlanticContextState<T>
    extends DeviceProviderProps,
        ThemeProviderProps<T> {}

export interface AtlanticProviderProps<T> extends AtlanticContextState<T> {}

type AtlanticProviderType<T> = FC<AtlanticProviderProps<T>>;

/**
 * `AtlanticProvider` creates a context for `styled` theme, this instance uses default typing, for extending the given type, use `createAtlanticProvider<YourThemeType>()` or cast `AtlanticProvider` to AtlanticProviderType<YourThemeType>
 */
export const AtlanticProvider: AtlanticProviderType<ThemeType> = ({
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

export const createAtlanticProvider: <T>() => AtlanticProviderType<T> = <
    T extends any
>() => AtlanticProvider as AtlanticProviderType<T>;
