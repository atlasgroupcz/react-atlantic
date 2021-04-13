import { PropsWithChildren } from 'react';
import { ButtonProps } from '../../../../../../../../../../Button';
import { useInnerTransferCancel } from '../../../../../../../../../hooks/Inner';
import { useTransferContext } from '../../../../../../../../../context';

export const useTransferDefaultCancelButton = (
    props: PropsWithChildren<ButtonProps>
): PropsWithChildren<ButtonProps> => {
    const onClick = useInnerTransferCancel();
    const { size } = useTransferContext();
    return { ...props, size, onClick };
};
