import React from 'react';
import { FC } from 'react';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { PaginationArrowComponentProps } from '../types';
type PaginationLeftButtonProps = PaginationArrowComponentProps;
type PaginationLeftButtonType = FC<PaginationLeftButtonProps>;
export const PaginationLeftButton: PaginationLeftButtonType = (props) => {
    return (
        <Button {...props}>
            <Icon name="arrowLeft" />
        </Button>
    );
};
