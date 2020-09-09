import React from 'react';
import { PaginationComponentProps } from './base/Pagination';
import { FC } from 'react';
import { Button } from '../../Button';

type PaginationButtonProps = PaginationComponentProps;
type PaginationButtonType = FC<PaginationButtonProps>;
export const PaginationButton: PaginationButtonType = ({
    isActive,
    ...props
}) => <Button {...props} isDisabled={isActive} />;
