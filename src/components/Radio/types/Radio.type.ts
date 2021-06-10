import { CommonHTMLProps, Type } from '../../../types';
import { FC, FormEvent, PropsWithChildren } from 'react';
import { OptionType } from '../../Select';

export type RadioType = FC<PropsWithChildren<RadioButtonProps>>;

export type UseRadioArgs = {
    values: Array<OptionType>;
    groupName: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value: string;
    isFullWidth?: boolean;
};

export type CommonRadioProps = {};

export type StyledRadioProps = {
    type?: Type;
} & Pick<UseRadioArgs, 'isFullWidth'>;

export type RadioButtonProps = CommonRadioProps &
    StyledRadioProps &
    UseRadioArgs &
    CommonHTMLProps<HTMLDivElement>;
