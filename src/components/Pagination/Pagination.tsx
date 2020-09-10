import React, { useMemo } from 'react';
import { StyledPaginationContainer } from './style';
import { PaginationType } from './types';
import { PaginationBase, PaginationWithArrows } from './view';
import { getPaginationCount } from './utils';

export const Pagination: PaginationType = ({
    showArrows = true,
    pageSize = 20,
    total = 0,
    left,
    right,
    ...props
}) => {
    const count = useMemo(() => getPaginationCount({ pageSize, total }), [
        total,
        pageSize,
    ]);

    return (
        <StyledPaginationContainer>
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