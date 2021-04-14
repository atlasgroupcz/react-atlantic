import { TransferRightSideItemProps } from '../../../../../../../../../types/TransferItemProps';
import { useDeleteOption } from '../../../hooks';

export const useTransferDefaultRightSideItem = ({
    option,
    ...props
}: Pick<
    TransferRightSideItemProps,
    'option' | 'size'
>): TransferRightSideItemProps => {
    const onDelete = useDeleteOption(option);
    return { onClick: onDelete, option, ...props };
};
