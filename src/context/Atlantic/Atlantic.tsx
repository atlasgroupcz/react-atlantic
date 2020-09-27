import React, { FC } from 'react';
import { DeviceProviderProps, DeviceProvider } from '../Device';
import { ThemeProviderProps, ThemeProvider } from '../Theme';
import { ThemeType } from '../../theme';

export interface AtlanticContextState<T extends ThemeType<any>>
    extends DeviceProviderProps,
        ThemeProviderProps<T> {}

export interface AtlanticProviderProps<T extends ThemeType<any>>
    extends AtlanticContextState<T> {}

type AtlanticProviderType<T extends ThemeType<any>> = FC<
    AtlanticProviderProps<T>
>;

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

export const createAtlanticProvider = <T extends ThemeType<any>>() =>
    AtlanticProvider as AtlanticProviderType<T>;
