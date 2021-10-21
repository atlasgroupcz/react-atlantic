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
    O extends SelectMultiOptionOptionType = SelectMultiOptionOptionType,
    V extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectProps<O> & {
    onValueClick?: (
        option: V,
        event?: React.MouseEvent<HTMLElement, MouseEvent>
    ) => void;
    SelectedOption?: SelectMultiOptionType;
};

export type ControllerSelectMultiProps<
    O extends SelectMultiOptionOptionType = SelectMultiOptionOptionType,
    V extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectMultiProps<O, V> & {
    options: O[];
    defaultValue?: V[];
};

export type SelectMultiOptionOptionType<
    T extends ReactText = ReactText
> = OptionType<T> & {
    isSelected?: boolean;
};

export type SelectMultiProps<
    O extends SelectMultiOptionOptionType = SelectMultiOptionOptionType,
    V extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectMultiProps<O, V> & {
    values?: V[];
    placeholder?: O['label'];
    ref?: RefObject<HTMLDivElement>;
    isOptionSelected?: boolean;
    onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
} & StyledSelectProps &
    ElementProps<HTMLDivElement>;
