import { ElementProps } from '../../../types/utils';
import { Size, CommonHTMLProps } from '../../../types';
import { PartitionProps } from '../../../types/utils';

type HTMLInputProps = ElementProps<HTMLInputElement>;
type NewStyledInputProps = {
    isRound?: boolean;
    inputSize: Size;
    isFullWidth?: boolean;
};

type InputPropsPartition = PartitionProps<
    NewStyledInputProps,
    HTMLInputProps,
    CommonHTMLProps | 'onFocus' | 'onBlur' | 'onChange'
>;

export type StyledInputProps = InputPropsPartition['main'] &
    InputPropsPartition['rest'];

export type InputProps = InputPropsPartition['main'] & {
    htmlProps: InputPropsPartition['rest'];
};
