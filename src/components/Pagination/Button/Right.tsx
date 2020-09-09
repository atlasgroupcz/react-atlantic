import React from 'react';
import { FC } from 'react';
import { Button } from '../../Button';
import { PaginationArrowComponentProps } from '../view/withArrows/types';
import { Icon } from '../../Icon';

type PaginationRightButtonProps = PaginationArrowComponentProps;
type PaginationRightButtonType = FC<PaginationRightButtonProps>;
export const PaginationRightButton: PaginationRightButtonType = (props) => {
    return (
        <Button {...props}>
            <Icon name="arrowRight" />
        </Button>
    );
};
