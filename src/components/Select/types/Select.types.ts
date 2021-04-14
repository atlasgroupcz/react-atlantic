import { Size } from '../../../types';
import { ReactElement, ReactNode, ReactText, RefObject } from 'react';
import { ElementProps } from '../../../types/utils';

export interface OptionType<V = string, L = ReactElement | null | string> {
    value: V;
    label: L;
}

type SharedSelectProps<
    T extends OptionType<ReactText> = OptionType<ReactText>
> = {
    options?: T[];
    onOptionClick?: (option: T) => void;
    isOpen?: boolean;
    onClick?: ElementProps<HTMLDivElement>['onClick'];
    isDisabled?: boolean;
};

export type ControllerSelectProps<
    T extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectProps<T> & {
    defaultValue?: T;
};

export type StyledComponentSelectProps = {
    size?: Size;
    visibleRows?: number;
    isFullWidth?: boolean;
};

export type SelectProps<
    T extends OptionType<ReactText> = OptionType<ReactText>
> = SharedSelectProps<T> & {
    value?: T;
    placeholder?: T['label'];
    ref?: RefObject<HTMLDivElement>;
} & StyledComponentSelectProps &
    ElementProps<HTMLDivElement>;
