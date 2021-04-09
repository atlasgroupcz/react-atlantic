import { PropsWithChildren } from 'react';
import { wrap } from '../../../../../../utils';
import { Button, ButtonProps } from '../../../../../Button';
import { useTransferContext } from '../../../../context';
import { useInnerTransferCancel } from '../../../../hooks/Inner';

export const useDefaultTransferCancelButton = (
    props: PropsWithChildren<ButtonProps>
): PropsWithChildren<ButtonProps> => {
    const onClick = useInnerTransferCancel();
    const { size } = useTransferContext();
    return { ...props, size, onClick };
};

export const ControlledDefaultTransferCancelButton = wrap(
    Button,
    useDefaultTransferCancelButton
);
