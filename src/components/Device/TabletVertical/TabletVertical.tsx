import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Device } from '../Device';

export const TabletVertical: FC<Readonly<
  PropsWithChildren<Readonly<unknown>>
>> = ({ children }): Readonly<ReactElement> => (
  <Device devices={['tabletVertical']}>{children}</Device>
);
