import { Size } from '../../../types';
import { ReactNode, ReactText, RefObject } from 'react';
import { ElementProps } from '../../../types/utils';

export interface OptionType<V = ReactText, L = ReactNode> {
    value: V;
    label: L;
}

type SharedSelectProps<T extends OptionType = OptionType> = {
    options?: T[];
    onOptionClick?: (option: T) => void;
    isOpen?: boolean;
    onClick?: ElementProps<HTMLDivElement>['onClick'];
    isDisabled?: boolean;
};

export type ControllerSelectProps<
    T extends OptionType = OptionType
> = SharedSelectProps<T> & {
    defaultValue?: T;
};

export type StyledComponentSelectProps = {
    size?: Size;
    isFullWidth?: boolean;
};

export type SelectProps<T extends OptionType = OptionType> = SharedSelectProps<
    T
> & {
    value?: T;
    placeholder?: T['label'];
    ref?: RefObject<HTMLDivElement>;
} & StyledComponentSelectProps &
    ElementProps<HTMLDivElement>;
