import React, { FC } from 'react';
import { DatePickerProps } from '../types/DatePicker';

export type DatePickerType = FC<DatePickerProps>;

export const DatePicker: DatePickerType = () => {
    return <>Hi iam yours date picker, PICK A DAY!</>;
};
