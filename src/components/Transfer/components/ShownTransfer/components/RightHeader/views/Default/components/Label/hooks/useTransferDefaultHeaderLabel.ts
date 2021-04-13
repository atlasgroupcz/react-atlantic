import { DefaultRightHeaderLabelProps } from '../../../../../../../../../types/DefaultRightHeaderLabelProps';
import {
    useInnerTransferContext,
    useTransferContext,
} from '../../../../../../../../../context';

export const useTransferDefaultHeaderLabel = (
    props: Pick<DefaultRightHeaderLabelProps, 'text'>
): DefaultRightHeaderLabelProps => {
    const { options } = useTransferContext();
    const { innerValue } = useInnerTransferContext();

    const optionsSize = options.length;
    const valueSize = innerValue?.length ?? 0;

    return { optionsSize, valueSize, ...props };
};
