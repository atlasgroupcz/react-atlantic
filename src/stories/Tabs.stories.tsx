import React from 'react';
import { Tabs } from '..';
import { disableOnEvent } from './disableOnEvent';

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {
        ...disableOnEvent,
    },
};

export const Overview = () => (
    <Tabs List={<div />} activeKey="1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </Tabs>
);
