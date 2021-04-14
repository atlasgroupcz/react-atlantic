import { CommonHTMLProps, Type } from '../../../types';
import { FC, FormEvent, PropsWithChildren } from 'react';
import { OptionType } from '../../Select';

export type RadioButtonType = FC<PropsWithChildren<RadioButtonProps>>;

export type UseRadioButtonArgs = {
    values: Array<OptionType>;
    groupName: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value: string;
    isFullWidth?: boolean;
};

export type CommonRadioButtonProps = {};

export type StyledRadioButtonProps = {
    type?: Type;
} & Pick<UseRadioButtonArgs, 'isFullWidth'>;

export type RadioButtonProps = CommonRadioButtonProps &
    StyledRadioButtonProps &
    UseRadioButtonArgs &
    CommonHTMLProps<HTMLDivElement>;
