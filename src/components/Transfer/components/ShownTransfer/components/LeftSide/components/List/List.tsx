import React, { FC } from 'react';
import { Checkbox } from '../../../../../../../Checkbox';
import { LeftSideProps } from '../../../../../../types/LeftSideList';
import { TransferList } from '../../../List';
import { StyledTransferLeftSideNoResults } from '../../styles';

export type LeftSideListType = FC<LeftSideProps>;

export const LeftSideList: LeftSideListType = ({
    options,
    size,
    visibleRows,
    value,
    noResults,
    isDisabled,
    onOptionClick,
}) => {
    const selectedOptionsSet = new Set(value?.map((option) => option.value));

    return (
        <>
            {!!options?.length && (
                <TransferList size={size} visibleRows={visibleRows}>
                    {options?.map((option) => (
                        <TransferList.Item
                            size={size}
                            key={`${option.value}
                                        ${selectedOptionsSet.has(
                                            option.value
                                        )}`}
                        >
                            <Checkbox
                                isChecked={selectedOptionsSet.has(option.value)}
                                onClick={() => onOptionClick?.(option)}
                                size={size}
                            >
                                {option.label}
                            </Checkbox>
                        </TransferList.Item>
                    ))}
                </TransferList>
            )}

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
