import { ReactText, RefObject } from 'react';
import { ElementProps } from '../../../types/utils';
import {
    OptionType,
    SharedSelectProps,
    StyledSelectProps,
} from './Common.type';

export type ControllerSelectProps<
    T extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectProps<T> & {
    defaultValue?: T;
};

export type SelectProps<
    T extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectProps<T> & {
    value?: T;
    placeholder?: T['label'];
    ref?: RefObject<HTMLDivElement>;
    isOptionSelected?: boolean;
} & StyledSelectProps &
    ElementProps<HTMLDivElement>;
