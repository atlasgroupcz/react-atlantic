import React, { useMemo } from 'react';
import { structureArray } from '../../utils/structureArray';
import { PaginationButton } from '../../Button/Button';
import { PaginationSeparator } from '../../Separator';
import { PaginationBaseType } from './types';

export const PaginationBase: PaginationBaseType = ({
    page = 1,
    count = 0,
    onClick,
    as = PaginationButton,
    separator = <PaginationSeparator />,
}) => {
    const strucArr = useMemo(() => structureArray({ count, page }), [
        count,
        page,
    ]);

    return (
        <>
            {strucArr.map((key, index) => {
                if (key === -1) {
                    return <li key={key - index}>{separator}</li>;
                } else {
                    const pageNumber = key;
                    const onClickForChild = (
                        e: React.MouseEvent<Element, MouseEvent>
                    ) => onClick?.(e, pageNumber);
                    const Component = as;
                    return (
                        <li key={key}>
                            <Component
                                onClick={onClickForChild}
                                isActive={page === pageNumber}
                            >
                                {pageNumber}
                            </Component>
                        </li>
                    );
                }
            })}
        </>
    );
};
