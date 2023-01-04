import { HorizontalPositionWithDocs, MouseEvents, Type } from '../../../types';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { ElementProps } from '../../../types/utils';

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
    Omit<ElementProps<HTMLInputElement>, 'type'> &
    MouseEvents<HTMLInputElement> &
    HorizontalPositionWithDocs;
