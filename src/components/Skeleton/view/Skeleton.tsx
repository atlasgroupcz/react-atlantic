import React, { FC } from 'react';
import { StyledSkeleton } from './style';
import { SkeletonProps } from '../types';

export const Skeleton: FC<SkeletonProps> = ({
    shape = 'rectangle',
    ...props
}) => {
    return <StyledSkeleton {...props} />;
};

Skeleton.displayName = `Skeleton`;
