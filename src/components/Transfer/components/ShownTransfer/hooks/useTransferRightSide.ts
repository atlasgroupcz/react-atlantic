import { useTransferContext } from '../../../context';
import { TransferRightSideProps } from '../components';

export const useTransferRightSide = (_: {}): TransferRightSideProps<
    HTMLDivElement
> => {
    const { position, ...props } = useTransferContext();
    return {
        position,
        ...props,
    };
};
