import { useInnerTransferContext } from '../../../context';
import { TransferRightSideProps } from '../components';

export const useTransferRightSide = (_: {}): TransferRightSideProps<
    HTMLDivElement
> => {
    const { position, ...props } = useInnerTransferContext();
    return {
        position,
        ...props,
    };
};
