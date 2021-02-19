import { Size } from '../../../types';

type GetTransferSideHeightType = (size: Size, visibleRows: number) => number;

// @ts-ignore
export const getTransferSideHeight: GetTransferSideHeightType = (
    size,
    visibleRows
) => {
    return parseFloat(size) * visibleRows;
};
