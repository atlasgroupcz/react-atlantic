import React, { FC } from 'react';
import {
    StyledTransferLeftDropdown,
    StyledTransferLeftSide,
    StyledTransferLeftSideNoResults,
} from './styles';
import { Icon } from '../../../Icon/view';
import { Checkbox } from '../../../Checkbox/view/alpha';
import { OptionType } from '../../../Select/types';
import { TransferProps } from '../../types';
import { TransferList } from '../List';
import { Input } from '../../../Input';

// TODO: Fix onOptionClick type
export type TransferLeftSideProps<T extends OptionType = OptionType> = {
    isLeftSideOpen?: boolean;
    isRightSideOpen?: boolean;
    onOptionClick: any;
} & Pick<
    TransferProps,
    | 'options'
    | 'value'
    | 'clearInputProps'
    | 'noResults'
    | 'size'
    | 'visibleRows'
    | 'isDisabled'
    | 'isFullWidth'
>;

export type TransferLeftSideType = FC<TransferLeftSideProps>;

export const TransferLeftSide: TransferLeftSideType = ({
    isLeftSideOpen,
    isRightSideOpen,
    onOptionClick,
    options,
    value,
    clearInputProps,
    noResults,
    size,
    visibleRows,
    isDisabled,
    isFullWidth,
}) => {
    const selectedOptionsSet = new Set(value?.map((option) => option.value));
    const { onClick, ...rest } = clearInputProps || {};

    return (
        <StyledTransferLeftSide
            isLeftSideOpen={isLeftSideOpen}
            isRightSideOpen={isRightSideOpen}
            isValueExist={!!rest?.value}
            isDisabled={isDisabled}
            size={size}
            isFullWidth={isFullWidth}
        >
            <Input
                suffix={
                    <StyledTransferLeftDropdown
                        isTransferOpen={isLeftSideOpen}
                        isIconVisible={
                            !isLeftSideOpen || (isLeftSideOpen && !!rest?.value)
                        }
                    >
                        {!isLeftSideOpen ? (
                            <Icon name={`arrowDown`} />
                        ) : (
                            rest?.value && (
                                <Icon name={`clear`} onClick={onClick} />
                            )
                        )}
                    </StyledTransferLeftDropdown>
                }
                isFullWidth
                size={size}
                isDisabled={isDisabled}
                {...rest}
            />

            {isLeftSideOpen && (
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
                                        isChecked={selectedOptionsSet.has(
                                            option.value
                                        )}
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
            )}
        </StyledTransferLeftSide>
    );
};
