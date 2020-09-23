import React, { FC } from 'react';
import { DatePickerCustomHeaderProps } from '../../types';

type DatePickerHeaderType = FC<DatePickerCustomHeaderProps>;
export const DatePickerHeader: DatePickerHeaderType = ({ ...props }) => {
    return <>Own Date Picker Header</>;
};
