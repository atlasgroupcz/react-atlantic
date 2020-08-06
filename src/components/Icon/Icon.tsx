import React, { FC } from 'react';
import { StyledIcon } from './Icon.style';
import { IconsMap } from './IconsMap';
import { IconProps } from './types';

export type IconType = FC<IconProps>;

export const Icon: IconType = ({ name, isRotating, ...props }) => {
    return (
        <StyledIcon isRotating={isRotating} name={name} {...props}>
            {IconsMap[name] ?? <i {...props} />}
        </StyledIcon>
    );
};

Icon.displayName = `Icon`;
