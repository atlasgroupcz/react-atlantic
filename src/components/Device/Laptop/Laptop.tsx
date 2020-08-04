import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Device } from '../Device';

export const Laptop: FC<Readonly<PropsWithChildren<Readonly<unknown>>>> = ({
  children
}): Readonly<ReactElement> => <Device devices={['laptop']}>{children}</Device>;
