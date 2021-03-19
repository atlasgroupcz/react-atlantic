import React, { FC } from 'react';
import { StyledSkeleton } from './styles';
import { SkeletonProps } from '../types';

export const Skeleton: FC<SkeletonProps> = ({
    shape = 'rectangle',
    className,
    ...props
}) => {
    return <StyledSkeleton className={className} {...props} />;
};

Skeleton.displayName = `Skeleton`;
