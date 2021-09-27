import React from 'react';
import { RadioButtons, RadioCircular, RadioButtonProps } from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Radio',
    component: RadioButtons,
    argTypes: {
        size: crossOut,
        type: crossOut,
        isDisabled: crossOut,
        isFullWidth: {
            name: 'isFullWidth',
            defaultValue: false,
        },
        isChecked: crossOut,
        values: crossOut,
        groupName: crossOut,
        value: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = ({ isFullWidth }: RadioButtonProps) => {
    const values = [
        {
            isDisabled: true,
            label: 'Label 1',
            value: 'firstValue',
        },
        {
            label: 'Label 2',
            value: 'secondValue',
        },
        {
            label: 'Label 3',
            value: 'thirdValue',
        },
    ];

    return (
        <>
            <RadioButtons
                groupName="firstGroup"
                onChange={function noRefCheck() {}}
                value="secondValue"
                values={values}
                isFullWidth={isFullWidth}
            />
            <RadioCircular
                groupName="secondGroup"
                onChange={function noRefCheck() {}}
                value="secondValue"
                values={values}
                isFullWidth={isFullWidth}
            />
        </>
    );
};
