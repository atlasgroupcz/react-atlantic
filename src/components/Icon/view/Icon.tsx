import React, { FC } from 'react';
import { StyledIcon } from './style';
import { IconsMap } from './IconsMap';
import { IconProps } from '../types';

export type IconType = FC<IconProps>;

export const Icon: IconType = ({ name, isRotating, ...props }) => (
    <StyledIcon isRotating={isRotating} name={name} {...props}>
        {IconsMap[name] ?? <i {...props} />}
    </StyledIcon>
);

Icon.displayName = `Icon`;
