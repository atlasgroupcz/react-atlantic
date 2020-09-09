import React from 'react';
import { FC } from 'react';
import { Button } from '../../Button';
import { PaginationArrowComponentProps } from '../view/withArrows/types';
import { Icon } from '../../Icon';
type PaginationLeftButtonProps = PaginationArrowComponentProps;
type PaginationLeftButtonType = FC<PaginationLeftButtonProps>;
export const PaginationLeftButton: PaginationLeftButtonType = (props) => {
    return (
        <Button {...props}>
            <Icon name="arrowLeft" />
        </Button>
    );
};
