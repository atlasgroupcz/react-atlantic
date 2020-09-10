import React, { useCallback } from 'react';
import { PaginationBase } from '../base/Pagination';
import { PaginationWithArrowsType } from './types';
import { clamp } from '../../utils';
import { PaginationLeftButton, PaginationRightButton } from '../../Button';

export const PaginationWithArrows: PaginationWithArrowsType = ({
    showArrows,
    onClick,
    page = 1,
    count = 0,
    left: LeftComponent = PaginationLeftButton,
    right: RightComponent = PaginationRightButton,
    ...props
}) => {
    const handleNext = useCallback(
        (e: React.MouseEvent<Element, MouseEvent>) => {
            const nextPage = page + 1;
            onClick?.(e, clamp(nextPage, 1, count));
        },
        [page, count, onClick]
    );
    const handlePrev = useCallback(
        (e: React.MouseEvent<Element, MouseEvent>) => {
            const prevPage = page - 1;
            onClick?.(e, clamp(prevPage, 1, count));
        },
        [page, count, onClick]
    );

    const isDisabledPrev = page === 1;
    const isDisabledNext = page === count;

    return (
        <>
            {LeftComponent && (
                <li>
                    {
                        <LeftComponent
                            onClick={handlePrev}
                            isDisabled={isDisabledPrev}
                        />
                    }
                </li>
            )}
            <PaginationBase
                {...props}
                onClick={onClick}
                page={page}
                count={count}
            />
            {RightComponent && (
                <li>
                    {
                        <RightComponent
                            onClick={handleNext}
                            isDisabled={isDisabledNext}
                        />
                    }
                </li>
            )}
        </>
    );
};
