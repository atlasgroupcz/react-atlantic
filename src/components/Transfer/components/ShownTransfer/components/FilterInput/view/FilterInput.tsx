import React, { useCallback, useState } from 'react';
import { wrap } from '../../../../../../../utils';
import { Icon } from '../../../../../../Icon';
import { Input, InputFixProps } from '../../../../../../Input';
import {
    useInnerTransferContext,
    useTransferContext,
} from '../../../../../context';
import { StyledTransferLeftDropdown } from '../../LeftSide';
import { filterFactory } from '../../../../../utils/filterFactory';

export const useDefaultTransferFilterInput = ({
    ...props
}: InputFixProps): InputFixProps => {
    const { options } = useTransferContext();
    const { setInnerOptions } = useInnerTransferContext();
    const [filterValue, setFilterValue] = useState<string>(``);

    const handleClear = useCallback(() => {
        setFilterValue(``);
        setInnerOptions(options);
    }, [options, setInnerOptions]);

    const handleChange = useCallback<NonNullable<InputFixProps['onChange']>>(
        (e) => {
            const { value } = e.currentTarget;
            setFilterValue(value);
            const filterFunc = filterFactory(value);
            setInnerOptions(options.filter(filterFunc));
        },
        [options, setInnerOptions]
    );

    return {
        suffix: (
            <StyledTransferLeftDropdown
                isTransferOpen={true}
                isIconVisible={!!filterValue}
            >
                {filterValue && <Icon name={`clear`} onClick={handleClear} />}
            </StyledTransferLeftDropdown>
        ),
        isFullWidth: true,
        onChange: handleChange,
        value: filterValue,
        ...props,
    };
};

export const ControlledDefaultTransferFilterInput = wrap(
    Input,
    useDefaultTransferFilterInput
);
