import React, { useMemo } from 'react';
import { StyledPaginationContainer } from './styles';
import { PaginationType } from './types';
import { PaginationBase, PaginationWithArrows } from './view';
import { getPaginationCount } from './utils';

export const Pagination: PaginationType = ({
    showArrows = true,
    pageSize = 20,
    total = 0,
    left,
    right,
    className,
    tabIndex,
    ref,
    ...props
}) => {
    const count = useMemo(() => getPaginationCount({ pageSize, total }), [
        total,
        pageSize,
    ]);

    return (
        <StyledPaginationContainer
            className={className}
            ref={ref}
            tabIndex={tabIndex}
        >
            {showArrows || left || right ? (
                <PaginationWithArrows
                    {...props}
                    count={count}
                    left={left}
                    right={right}
                />
            ) : (
                <PaginationBase {...props} count={count} />
            )}
        </StyledPaginationContainer>
    );
};

Pagination.displayName = 'Pagination';
