import React, { useState } from 'react';
import { DatePicker, DatePickerProps } from '..';

export default {
    title: 'DatePicker',
    component: DatePicker,
    argTypes: {
        isFullWidth: {
            name: 'isFullWidth',
            defaultValue: false,
        },
    },
};

export const Overview = ({ isFullWidth }: DatePickerProps) => {
    const [value, setValue] = useState<Date | [Date, Date] | null>(null);

    return (
        <DatePicker
            isFullWidth={isFullWidth}
            locale="cs"
            onChange={(val) => setValue(val)}
            value={value === null ? '' : value.toString()}
        />
    );
};
