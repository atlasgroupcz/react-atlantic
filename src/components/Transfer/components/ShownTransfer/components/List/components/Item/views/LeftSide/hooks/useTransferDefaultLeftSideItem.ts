import { TransferLeftSideItemProps } from '../../../../../../../../../types/TransferItemProps';
import { useAddOption, useDeleteOption } from '../../../hooks';

export const useTransferDefaultLeftSideItem = ({
    option,
    isChecked,
    ...props
}: Pick<
    TransferLeftSideItemProps,
    'option' | 'isChecked' | 'size'
>): TransferLeftSideItemProps => {
    const onAdd = useAddOption(option);
    const onDelete = useDeleteOption(option);
    const handleClick = isChecked ? onDelete : onAdd;
    return { onClick: handleClick, option, isChecked, ...props };
};
