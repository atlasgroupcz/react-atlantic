import { HorizontalPositionWithDocs, MouseEvents, Size } from '../../../types';
import { FC, PropsWithChildren } from 'react';
import { ElementProps } from '../../../types/utils';

export type CheckboxType = FC<PropsWithChildren<CheckboxProps>>;

export type UseCheckboxArgs = {
    isDefaultChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
};

export type CommonCheckboxProps = {
    isChecked?: boolean;
};

export type StyledCheckboxProps = {
    size?: Size;
};

export type CheckboxProps = CommonCheckboxProps &
    StyledCheckboxProps &
    Omit<UseCheckboxArgs, 'isDefaultChecked'> &
    Omit<ElementProps<HTMLInputElement>, 'type' | 'size'> &
    MouseEvents<HTMLInputElement> &
    HorizontalPositionWithDocs;
