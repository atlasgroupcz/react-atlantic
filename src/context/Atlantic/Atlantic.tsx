import React, { FC } from 'react';
import { DeviceProviderProps, DeviceProvider } from '../Device';
import { ThemeProviderProps, ThemeProvider } from '../Theme';
import { theme as defaultTheme } from '../../theme';

export interface AtlanticContextState
    extends DeviceProviderProps,
        ThemeProviderProps {}

export interface AtlanticProviderProps extends AtlanticContextState {}

type AtlanticProviderType = FC<AtlanticProviderProps>;
export const AtlanticProvider: AtlanticProviderType = ({
    currentDevice,
    devices,
    children,
    theme = defaultTheme,
}) => {
    return (
        <DeviceProvider devices={devices} currentDevice={currentDevice}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </DeviceProvider>
    );
};
