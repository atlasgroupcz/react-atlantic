import { PropsWithChildren } from 'react';
import { wrap } from '../../../../../../utils';
import { Button, ButtonProps } from '../../../../../Button';
import { useTransferContext } from '../../../../context';
import { useInnerTransferSubmit } from '../../../../hooks/Inner';

export const useDefaultTransferSubmitButton = ({
    type = 'primary',
    ...props
}: PropsWithChildren<ButtonProps>): PropsWithChildren<ButtonProps> => {
    const onClick = useInnerTransferSubmit();
    const { size } = useTransferContext();
    return { type, ...props, size, onClick };
};

export const ControlledDefaultTransferSubmitButton = wrap(
    Button,
    useDefaultTransferSubmitButton
);
