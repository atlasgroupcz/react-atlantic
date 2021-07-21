import React, { FC, ReactNode, ReactText, RefObject } from 'react';
import { ElementProps } from '../../../types/utils';
import {
    OptionType,
    SharedSelectProps,
    StyledSelectProps,
} from './Common.type';

export type SelectMultiOptionProps = {
    value: ReactNode | string;
} & Pick<StyledSelectProps, 'size'> &
    ElementProps<HTMLDivElement>;

export type SelectMultiOptionType = FC<SelectMultiOptionProps>;

type SharedSelectMultiProps<
    T extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectProps<T> & {
    onValueClick?: (
        option: T,
        event?: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    SelectedOption?: SelectMultiOptionType;
};

export type ControllerSelectMultiProps<
    T extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectMultiProps<T> & {
    defaultValue?: T[];
};

export type SelectMultiProps<
    T extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectMultiProps<T> & {
    values?: T[];
    placeholder?: T['label'];
    ref?: RefObject<HTMLDivElement>;
    isOptionSelected?: boolean;
} & StyledSelectProps &
    ElementProps<HTMLDivElement>;
