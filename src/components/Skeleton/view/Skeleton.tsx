import React, { FC } from 'react';
import { StyledSkeleton } from './style';
import { SkeletonProps } from '../types';

export const Skeleton: FC<SkeletonProps> = ({ ...props }) => {
    return <StyledSkeleton {...props} />;
};

Skeleton.defaultProps = {
    shape: 'rectangle',
};

Skeleton.displayName = `Skeleton`;
