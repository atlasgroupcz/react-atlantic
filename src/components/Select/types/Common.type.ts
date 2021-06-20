import { ReactElement, ReactText } from 'react';
import { ElementProps } from '../../../types/utils';
import { Size } from '../../../types';

export interface OptionType<V = string, L = ReactElement | null | string> {
    value: V;
    label: L;
}

export type SharedSelectProps<
    T extends OptionType<ReactText> = OptionType<ReactText>
> = {
    options?: T[];
    onOptionClick?: (option: T) => void;
    isOpen?: boolean;
    onClick?: ElementProps<HTMLDivElement>['onClick'];
    isDisabled?: boolean;
};

export type StyledSelectProps = {
    size?: Size;
    visibleRows?: number;
    isFullWidth?: boolean;
};
