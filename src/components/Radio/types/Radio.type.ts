import { Type } from '../../../types';
import { FC, FormEvent, PropsWithChildren, ReactElement } from 'react';
import { OptionType } from '../../Select';
import { ElementProps } from '../../../types/utils';

export type RadioType = FC<PropsWithChildren<RadioButtonProps>>;

export type RadioOptionType = OptionType & { isDisabled?: boolean; content?: ReactElement };

export type UseRadioArgs = {
    values: Array<RadioOptionType>;
    groupName: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value: string;
    isFullWidth?: boolean;
};

export type CommonRadioProps = {};

export type StyledRadioProps = {
    type?: Type;
    isDisabled?: boolean;
    isChecked?: boolean;
} & Pick<UseRadioArgs, 'isFullWidth'>;

export type RadioButtonProps = CommonRadioProps &
    StyledRadioProps &
    UseRadioArgs &
    Omit<ElementProps<HTMLDivElement>, 'onChange'>;
