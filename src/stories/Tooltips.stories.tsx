import React from 'react';
import { Tooltips } from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Tooltips',
    component: Tooltips,
    argTypes: {
        contentAttr: crossOut,
        positionAttr: crossOut,
        hideTooltips: crossOut,
        transition: crossOut,
        Tooltip: crossOut,
        borderPadding: crossOut,
        margin: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = () => (
    <>
        <Tooltips>
            <p style={{ color: 'white' }}>Text 1</p>
        </Tooltips>
        <br />
        <Tooltips transition="opacity: 1;transition: all 1s; ">
            <p style={{ color: 'white' }}>Text 2</p>
        </Tooltips>
    </>
);
