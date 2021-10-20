import { OVERFLOW_NUMBER_OFFSET, SELECT_OPTION_WIDTH } from './index';
import { RefObject, useEffect, useLayoutEffect, useState } from 'react';
import { SelectMultiProps } from '../types';
import debounce from 'lodash/debounce';
import { assertNumber } from '../../../utils/assert/assert';

export type CalculateItemVisibilityValue = {
    visibleItems: SelectMultiProps['values'];
    hiddenItemsNumber: number;
};

export const useCalculateItemVisibility = (
    ref: RefObject<HTMLDivElement>,
    values: SelectMultiProps['values']
): CalculateItemVisibilityValue => {
    const [hiddenItemsNumber, setHiddenItemsNumber] = useState(0);
    const numberOfValues = values?.length;
    const element = ref?.current;
    const valueContainerWidth = assertNumber(
        element?.getBoundingClientRect()?.width
    );

    const getVisibleItems = (valueContainerWidth: number) =>
        values?.slice(
            0,
            Math.floor(
                (valueContainerWidth - OVERFLOW_NUMBER_OFFSET) /
                    SELECT_OPTION_WIDTH
            )
        );

    const updateWidth = () => {
        const valueContainerWidth = assertNumber(
            element?.getBoundingClientRect()?.width
        );
        const visibleItems = getVisibleItems(valueContainerWidth);

        setHiddenItemsNumber(
            assertNumber(values?.length) - assertNumber(visibleItems?.length)
        );
    };

    const debouncedUpdateWidth = debounce(updateWidth, 500);

    useEffect(() => {
        if (numberOfValues) updateWidth();
    }, [numberOfValues]);

    useLayoutEffect(() => {
        if (element) {
            window.addEventListener('resize', debouncedUpdateWidth);

            return () =>
                window.removeEventListener('resize', debouncedUpdateWidth);
        }
    }, [element, debouncedUpdateWidth]);

    return {
        visibleItems: getVisibleItems(valueContainerWidth),
        hiddenItemsNumber,
    };
};
