import { wrap } from '../../../../../../../../utils';
import { useAddOption } from '../../../../../../hooks/Item/useAddOption';
import { useDeleteOption } from '../../../../../../hooks/Item/useDeleteOption';
import {
    TransferRightSideItemProps,
    TransferLeftSideItemProps,
} from '../../../../../../types/TransferItemProps';
import { LeftSideItem, RightSideItem } from './view';

export const useLeftSideItem = ({
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

export const useRightSideItem = ({
    option,
    ...props
}: Pick<
    TransferRightSideItemProps,
    'option' | 'size'
>): TransferRightSideItemProps => {
    const onDelete = useDeleteOption(option);
    return { onClick: onDelete, option, ...props };
};

export const ControlledLeftSideItem = wrap(LeftSideItem, useLeftSideItem);
export const ControlledRightSideItem = wrap(RightSideItem, useRightSideItem);
