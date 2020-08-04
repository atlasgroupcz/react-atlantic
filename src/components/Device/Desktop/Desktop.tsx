import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Device } from '../Device';

export const Desktop: FC<Readonly<PropsWithChildren<Readonly<unknown>>>> = ({
  children
}): Readonly<ReactElement> => <Device devices={['desktop']}>{children}</Device>;
