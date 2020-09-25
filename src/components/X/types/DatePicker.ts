import { ReactDatePickerProps } from 'react-datepicker';

export type DatePickerProps = {} & ReactDatePickerProps;

export type DatePickerCustomHeaderProps = Parameters<
    NonNullable<DatePickerProps['renderCustomHeader']>
>[0];
