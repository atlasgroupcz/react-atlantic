import React from 'react';
import { CollapsePanel } from '..';
import { disableOnEvent } from './disableOnEvent';

export default {
    title: 'Collapse',
    component: CollapsePanel,
    argTypes: {
        isDisabled: {
            name: 'isDisabled',
            defaultValue: false,
        },
        ...disableOnEvent,
    },
};

export const Overview = ({ isDisabled }: { isDisabled: boolean }) => (
    <CollapsePanel header="CollapsePanel 1" unique="1" isDisabled={isDisabled}>
        <p>panel 1</p>
    </CollapsePanel>
);
