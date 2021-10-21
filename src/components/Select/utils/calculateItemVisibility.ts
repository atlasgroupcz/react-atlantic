import { OVERFLOW_NUMBER_OFFSET, SELECT_OPTION_WIDTH } from './index';
import { RefObject, useEffect, useLayoutEffect, useState } from 'react';
import { SelectMultiProps } from '../types';
import debounce from 'lodash/debounce';
import { assertNumber } from '../../../utils';

export type CalculateItemVisibilityValue = {
    visibleItems: SelectMultiProps['values'];
    hiddenItemsNumber: number;
};

export const useCalculateItemVisibility = (
    ref: RefObject<HTMLDivElement>,
    values: SelectMultiProps['values']
): CalculateItemVisibilityValue => {
    const forceRerender = useState<boolean>(false)[1];
    const numberOfValues = values?.length;
    const element = ref?.current;

    const valueContainerWidth = assertNumber(
        element?.getBoundingClientRect()?.width
    );
    const visibleItems = values?.slice(
        0,
        Math.floor(
            (valueContainerWidth - OVERFLOW_NUMBER_OFFSET) / SELECT_OPTION_WIDTH
        )
    );
    const hiddenItemsNumber =
        assertNumber(values?.length) - assertNumber(visibleItems?.length);

    const debouncedUpdateWidth = debounce(
        () => forceRerender((prev) => !prev),
        500
    );

    useEffect(() => forceRerender((prev) => !prev), [numberOfValues]);

    useLayoutEffect(() => {
        if (element) {
            window.addEventListener('resize', debouncedUpdateWidth);

            return () =>
                window.removeEventListener('resize', debouncedUpdateWidth);
        }
    }, [element, debouncedUpdateWidth]);

    return {
        visibleItems,
        hiddenItemsNumber,
    };
};
