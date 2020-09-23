import React, { FC } from 'react';
import { DatePickerProps } from '../types';
import ReactDatePicker from 'react-datepicker';
import { Input } from '../../Input';
import { Icon } from '../../Icon';
import { DatePickerHeader } from './Header';
import 'react-datepicker/dist/react-datepicker.css';

export type DatePickerType = FC<DatePickerProps>;

export const DatePicker: DatePickerType = ({
    customInput = <Input prefix={<Icon name={'calendarAlt'} />} />,
    renderCustomHeader = DatePickerHeader,
    ...props
}) => {
    return (
        <ReactDatePicker
            {...props}
            customInput={customInput}
            renderCustomHeader={renderCustomHeader}
        />
    );
};
