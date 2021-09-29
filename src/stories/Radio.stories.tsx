import { wrap } from '@atlasgroup/react-wrap';
import React, { useMemo } from 'react';
import {
    RadioButtons as RadioButtonsView,
    RadioCircular as RadioCircularView,
    RadioButtonProps,
    useRadioButton,
} from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';

const RadioButtons = wrap(RadioButtonsView, useRadioButton);
const RadioCircular = wrap(RadioCircularView, useRadioButton);

export default {
    title: 'Radio',
    component: RadioButtonsView,
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
    const values = useMemo(
        () => [
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
        ],
        []
    );

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
