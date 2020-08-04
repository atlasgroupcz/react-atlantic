import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { ThemeProvider, ThemeProviderProps } from '../../theme';
import { DeviceProvider, DeviceProviderProps } from '../Device';

export interface AtlanticProviderProps
  extends ThemeProviderProps,
    DeviceProviderProps {}

export const AtlanticProvider: FC<Readonly<
  PropsWithChildren<Readonly<AtlanticProviderProps>>
>> = (props): Readonly<ReactElement> => {
  const { theme, children, currentDevice, devices } = props;

  return (
    <ThemeProvider theme={theme}>
      <DeviceProvider currentDevice={currentDevice} devices={devices}>
        {children}
      </DeviceProvider>
    </ThemeProvider>
  );
};
