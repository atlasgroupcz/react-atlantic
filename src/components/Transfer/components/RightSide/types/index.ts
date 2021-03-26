import { StyledComponentTransferProps, TransferProps } from '../../../types';
import { ElementProps } from '../../../../../types/utils';
import { Position } from '../../../../../types';

export type StyledTransformRightSideProps = Pick<
    StyledComponentTransferProps,
    'size'
>;

export type StyledTransformRightSideContainerProps = {
    position: Position;
};

export type FunctionalTransferRightSideProps = {
    onOptionClick?: any;
};

export type TransferRightSideProps<
    T extends HTMLElement
> = FunctionalTransferRightSideProps &
    StyledTransformRightSideProps &
    Pick<
        TransferProps,
        'label' | 'clearButtonProps' | 'value' | 'size' | 'visibleRows'
    > &
    ElementProps<T> &
    StyledTransformRightSideContainerProps;
