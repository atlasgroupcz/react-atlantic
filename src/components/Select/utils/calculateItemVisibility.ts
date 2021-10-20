import { OVERFLOW_NUMBER_OFFSET, SELECT_OPTION_WIDTH } from './index';
import { RefObject } from 'react';
import { SelectMultiProps } from '../types';

type CalculateItemVisibilityValue = {
    visibleItems: SelectMultiProps['values'];
    hiddenItemsNumber: number;
};

export const calculateItemVisibility = (
    ref: RefObject<HTMLDivElement>,
    values: SelectMultiProps['values']
): CalculateItemVisibilityValue => {
    const valueContainerWidth = ref?.current?.clientWidth || 0;
    const maxVisibleItems = Math.floor(
        (valueContainerWidth - OVERFLOW_NUMBER_OFFSET) / SELECT_OPTION_WIDTH
    );
    const visibleItems = values?.slice(0, maxVisibleItems);
    const hiddenItemsNumber =
        (values?.length || 0) - (visibleItems?.length || 0);

    return {
        visibleItems,
        hiddenItemsNumber,
    };
};
