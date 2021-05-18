import { ReactDatePickerProps } from 'react-datepicker';
import { InputProps } from '../../Input';

export type DatePickerProps = {} & ReactDatePickerProps &
    Pick<InputProps, 'isFullWidth'>;

export type DatePickerCustomHeaderProps = Parameters<
    NonNullable<DatePickerProps['renderCustomHeader']>
>[0];
