import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { Device } from '../Device';

export const Mobile: FC<Readonly<PropsWithChildren<Readonly<unknown>>>> = ({
  children
}): Readonly<ReactElement> => <Device devices={['mobile']}>{children}</Device>;
