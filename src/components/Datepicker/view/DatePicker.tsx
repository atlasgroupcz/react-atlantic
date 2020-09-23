import React, {
    PropsWithoutRef,
    RefAttributes,
    ForwardRefExoticComponent,
    forwardRef,
} from 'react';
import { DatePickerProps } from '../types';
import ReactDatePicker from 'react-datepicker';
import { Input } from '../../Input';
import { Icon } from '../../Icon';
import { DatePickerHeader } from './Header';
import 'react-datepicker/dist/react-datepicker.css';

export type DatePickerType = ForwardRefExoticComponent<
    PropsWithoutRef<DatePickerProps> & RefAttributes<ReactDatePicker>
>;

export const DatePicker: DatePickerType = forwardRef(
    (
        {
            customInput = <Input prefix={<Icon name={'calendarAlt'} />} />,
            renderCustomHeader = DatePickerHeader,
            ...props
        },
        ref
    ) => {
        return (
            <ReactDatePicker
                ref={ref}
                {...props}
                customInput={customInput}
                renderCustomHeader={renderCustomHeader}
            />
        );
    }
);
