import React, { FC } from 'react';
import { DeviceProviderProps, DeviceProvider } from '../Device';
import { ThemeProviderProps, ThemeProvider } from '../Theme';

export interface AtlanticContextState
    extends DeviceProviderProps,
        ThemeProviderProps {}

export interface AtlanticProviderProps extends AtlanticContextState {}

type AtlanticProviderType = FC<AtlanticProviderProps>;
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
