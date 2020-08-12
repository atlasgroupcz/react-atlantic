import { PropsWithoutChildren, Size } from '../../../types';
import { Props as ReactSelectProps } from 'react-select';

export type StyledSelectProps = {
    isMenuOpened?: Readonly<boolean>;
    isFocused?: Readonly<boolean>;
    isMulti?: Readonly<boolean>;
    hasValue?: Readonly<boolean>;
    isFullWidth?: Readonly<boolean>;
    isDisabled?: Readonly<boolean>;
    size?: Readonly<Size>;
};

export interface OptionType {
    value: any;
    label: string;
}

export type ControllerSelectProps = ReactSelectProps;

export type SelectProps = PropsWithoutChildren<
    StyledSelectProps & ControllerSelectProps
>;
