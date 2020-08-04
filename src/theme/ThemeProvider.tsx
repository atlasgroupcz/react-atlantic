import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { Theme } from './theme';

export interface ThemeProviderProps {
  theme: Readonly<Theme>;
}

export const ThemeProvider: FC<Readonly<
  PropsWithChildren<Readonly<ThemeProviderProps>>
>> = (props): Readonly<ReactElement> => {
  const { theme, children } = props;

  return <Provider theme={theme}>{children}</Provider>;
};
