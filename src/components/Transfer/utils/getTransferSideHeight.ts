import { Size } from '../../../types';

type GetTransferSideHeightType = (size: Size, visibleItems: number) => number;

// @ts-ignore
export const getTransferSideHeight: GetTransferSideHeightType = (
    size,
    visibleItems
) => {
    return parseFloat(size) * visibleItems;
};
