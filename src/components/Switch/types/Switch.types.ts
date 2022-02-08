import { CommonHTMLProps, HorizontalPositionWithDocs, MouseEvents, Type } from '../../../types';
import { FC, PropsWithChildren, ReactElement } from 'react';

export type SwitchType = FC<PropsWithChildren<SwitchProps>>;

export type UseSwitchArgs = {
    isDefaultChecked?: boolean;
    isDisabled?: boolean;
    isPartiallyChecked?: boolean;
};

export type CommonSwitchProps = {
    isChecked?: boolean;
    textOn?: ReactElement | null | string;
    textOff?: ReactElement | null | string;
    description?: string;
};

export type StyledSwitchProps = {
    type?: Type;
};

export type SwitchProps = CommonSwitchProps &
    StyledSwitchProps &
    Omit<UseSwitchArgs, 'isDefaultChecked'> &
    CommonHTMLProps<HTMLInputElement> &
    MouseEvents<HTMLInputElement> &
    HorizontalPositionWithDocs;
