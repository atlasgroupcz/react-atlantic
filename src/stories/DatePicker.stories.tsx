import React from 'react';
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

export const Overview = ({ isFullWidth }: DatePickerProps) => (
    <DatePicker
        isFullWidth={isFullWidth}
        locale="cs"
        onChange={function noRefCheck() {}}
    />
);
