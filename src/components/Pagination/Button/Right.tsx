import React from 'react';
import { FC } from 'react';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { PaginationArrowComponentProps } from '../types';

type PaginationRightButtonProps = PaginationArrowComponentProps;
type PaginationRightButtonType = FC<PaginationRightButtonProps>;
export const PaginationRightButton: PaginationRightButtonType = (props) => {
    return (
        <Button {...props}>
            <Icon name="arrowRight" />
        </Button>
    );
};
