import React, { FC } from 'react';
import { StyledSkeleton } from './styles';
import { SkeletonProps } from '../types';

export const Skeleton: FC<SkeletonProps> = ({
    shape = 'rectangle',
    ...props
}) => {
    return <StyledSkeleton {...props} />;
};

Skeleton.displayName = `Skeleton`;
