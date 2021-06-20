import React, { FC } from 'react';
import { ElementProps } from '../../../../../../types/utils';
import { StyledSelectInputIconContainer } from './styles';
import { Icon, IconProps } from '../../../../../Icon';
import { StyledSelectProps } from '../../../../types';

export type SelectInputIconProps = Pick<StyledSelectProps, 'size'> &
    Pick<IconProps, 'name' | 'isRotating'> &
    ElementProps<HTMLDivElement>;

type SelectInputIconType = FC<SelectInputIconProps>;

export const SelectInputIcon: SelectInputIconType = ({
    name,
    isRotating,
    ...containerProps
}) => (
    <StyledSelectInputIconContainer {...containerProps}>
        <Icon name={name} isRotating={isRotating} />
    </StyledSelectInputIconContainer>
);
