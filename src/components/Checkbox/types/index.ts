import {
    CommonHTMLProps,
    HorizontalPositionWithDocs,
    MouseEvents,
} from '../../../types';
import { FC, PropsWithChildren } from 'react';

export type CheckboxType = FC<PropsWithChildren<CheckboxProps>>;
export type UseCheckboxArgs = {
    isDefaultChecked?: boolean;
    isPartiallyChecked?: boolean;
    isDisabled?: boolean;
};
export type CommonCheckboxProps = {
    isChecked?: boolean;
};
export type CheckboxProps = CommonCheckboxProps &
    Omit<UseCheckboxArgs, 'isDefaultChecked'> &
    CommonHTMLProps<HTMLInputElement> &
    MouseEvents<HTMLInputElement> &
    HorizontalPositionWithDocs;
