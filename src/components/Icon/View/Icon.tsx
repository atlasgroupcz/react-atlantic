import React, { FC } from 'react';
import { StyledIcon } from './Style';
import { IconsMap } from './IconsMap';
import { IconProps } from '../Types';

export type IconType = FC<IconProps>;

export const Icon: IconType = ({ name, isRotating, ...props }) => (
    <StyledIcon isRotating={isRotating} name={name} {...props}>
        {IconsMap[name] ?? <i {...props} />}
    </StyledIcon>
);

Icon.displayName = `Icon`;
