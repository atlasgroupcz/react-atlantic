import { PropsWithChildren } from 'react';
import { ButtonProps } from '../../../../../../../../../../Button';
import { useInnerTransferSubmit } from '../../../../../../../../../hooks/Inner';
import { useTransferContext } from '../../../../../../../../../context';

export const useTransferDefaultSubmitButton = ({
    type = 'primary',
    ...props
}: PropsWithChildren<ButtonProps>): PropsWithChildren<ButtonProps> => {
    const onClick = useInnerTransferSubmit();
    const { size } = useTransferContext();
    return { type, ...props, size, onClick };
};
