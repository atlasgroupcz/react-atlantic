import { useTransferContext } from '../../../context';
import { LeftSideProps } from '../../../types/LeftSideList';

export const useLeftSideList = (_: {}): LeftSideProps => {
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
