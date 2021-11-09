import React, { useCallback, useState } from 'react';
import { InputDefaultProps } from '../../../../../../Input';
import {
    useInnerTransferContext,
    useTransferContext,
} from '../../../../../context';
import { filterFactory } from '../../../../../utils/filterFactory';
import { StyledTransferLeftDropdown } from '../../LeftSide';
import { Icon } from '../../../../../../Icon';

export const useTransferDefaultFilterInput = ({
    ...props
}: InputDefaultProps): InputDefaultProps => {
    const { options } = useTransferContext();
    const { setInnerOptions } = useInnerTransferContext();
    const [filterValue, setFilterValue] = useState<string>(``);

    const handleClear = useCallback(() => {
        setFilterValue(``);
        setInnerOptions(options);
    }, [options, setInnerOptions]);

    const { filterFactory: filterFactoryProp } = useTransferContext();

    const handleChange = useCallback<
        NonNullable<InputDefaultProps['onChange']>
    >(
        (e) => {
            const { value } = e.currentTarget;

            if (filterFactoryProp) {
                setFilterValue(value);
                const filterFunc = filterFactoryProp(value);
                setInnerOptions(options.filter(filterFunc));
            } else {
                setFilterValue(value);
                const filterFunc = filterFactory(value);
                setInnerOptions(options.filter(filterFunc));
            }
        },
        [filterFactoryProp, options, setInnerOptions]
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
        placeholder: 'Vyberte...',
        ...props,
    };
};
