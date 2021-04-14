import { LeftSideProps } from '../../../../../types';
import { useTransferContext } from '../../../../../context';

export const useTransferComposedLeftSide = (_: {}): LeftSideProps => {
    const {
        size,
        options,
        isDisabled,
        visibleRows,
        noResults,
    } = useTransferContext();
    return {
        size,
        options,
        isDisabled,
        visibleRows,
        noResults,
    };
};
