import React from 'react';
import { Timeline } from '..';
import { TimelineItem } from '../components/Timeline/view/Default/components';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Timeline',
    component: TimelineItem,
    argTypes: {
        type: crossOut,
        dot: crossOut,
        align: crossOut,
        unique: crossOut,
        oppositeContent: crossOut,
        ...disableOnEvent,
    },
};

export const Overview = () => (
    <>
        <Timeline>
            <TimelineItem type="success">
                <p>1</p>
            </TimelineItem>
            <TimelineItem type="info" oppositeContent={<>-2</>}>
                <p>2</p>
            </TimelineItem>
            <TimelineItem type="primary">
                <p>3</p>
            </TimelineItem>
        </Timeline>
    </>
);
