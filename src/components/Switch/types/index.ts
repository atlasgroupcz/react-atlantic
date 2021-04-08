import {
    CommonHTMLProps,
    HorizontalPositionWithDocs,
    MouseEvents,
    Size,
    Type,
} from '../../../types';
import { FC, PropsWithChildren, ReactElement } from 'react';

export type SwitchType = FC<PropsWithChildren<SwitchProps>>;

export type UseSwitchArgs = {
    isDefaultChecked?: boolean;
    isDisabled?: boolean;
};

export type CommonSwitchProps = {
    isChecked?: boolean;
    textOn?: ReactElement | null | string;
    textOff?: ReactElement | null | string;
};

export type StyledSwitchProps = {
    size?: Size;
    type?: Type;
};

export type SwitchProps = CommonSwitchProps &
    StyledSwitchProps &
    Omit<UseSwitchArgs, 'isDefaultChecked'> &
    CommonHTMLProps<HTMLInputElement> &
    MouseEvents<HTMLInputElement> &
    HorizontalPositionWithDocs;
