import React, { FC } from 'react';
import { wrap } from '../../../../../../../../utils';
import { useLeftList } from '../../../../../../hooks/List';
import { LeftSideProps } from '../../../../../../types/LeftSideList';
import { TransferList } from '../../../List/List';
import { StyledTransferLeftSideNoResults } from '../../styles';

export type LeftSideListType = FC<LeftSideProps>;

const LeftList = wrap(TransferList, useLeftList);
export const LeftSideList: LeftSideListType = ({
    options,
    size = 'medium',
    visibleRows,
    noResults,
    isDisabled,
}) => {
    return (
        <>
            <LeftList />
            {!options?.length && !isDisabled && (
                <StyledTransferLeftSideNoResults
                    size={size}
                    visibleRows={visibleRows}
                >
                    {noResults}
                </StyledTransferLeftSideNoResults>
            )}
        </>
    );
};
