import { useTransferContext } from '../../../context';
import { LeftSideProps } from '../../../types/LeftSideList';

export const useLeftSideList = (_: {}): LeftSideProps => {
    const {
        size,
        options,
        isDisabled,
        visibleRows,
        noResults,
        value,
        onOptionClick,
    } = useTransferContext();

    return {
        size,
        options,
        isDisabled,
        visibleRows,
        noResults,
        value,
        onOptionClick,
    };
};
