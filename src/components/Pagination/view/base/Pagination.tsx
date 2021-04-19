import React, { useMemo, FC } from 'react';
import { structureArray } from '../../utils/structureArray';
import { PaginationButton } from '../../Button/Button';
import { PaginationSeparator } from '../../Separator';
import { PaginationBaseProps } from '../../types';

export const PaginationBase: FC<PaginationBaseProps> = ({
    page = 1,
    count = 0,
    onClick,
    as = PaginationButton,
    separator = <PaginationSeparator />,
    structureSize,
}) => {
    const strucArr = useMemo(
        () => structureArray({ count, page, structureSize }),
        [count, page, structureSize]
    );

    return (
        <>
            {strucArr.map((key, index) => {
                if (key === -1) {
                    return separator && <li key={key - index}>{separator}</li>;
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

PaginationBase.displayName = 'PaginationBase';
