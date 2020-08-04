import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Device } from '../Device';

export const TabletHorizontal: FC<Readonly<
  PropsWithChildren<Readonly<unknown>>
>> = ({ children }): Readonly<ReactElement> => (
  <Device devices={['tabletHorizontal']}>{children}</Device>
);
