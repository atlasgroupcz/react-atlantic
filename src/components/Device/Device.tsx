import * as React from 'react';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { DeviceType, useDevice } from '../../context/Device';

interface DeviceProps {
  devices: ReadonlyArray<Readonly<DeviceType>>;
}

export const Device: FC<Readonly<PropsWithChildren<Readonly<DeviceProps>>>> = ({
  children,
  devices
}): Readonly<ReactElement | null> => {
  const { currentDevice } = useDevice();

  if (devices.includes(currentDevice)) {
    return <>{children}</>;
  }

  return null;
};
