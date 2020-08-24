import React, { useRef } from 'react';
import { Timeline } from '../view';
import { Icon } from '../../Icon';
import { TimelineItemProps } from '../view/Item/Item.types';

export const FirstTimelineDemo = () => {
    const ref = useRef<HTMLLIElement | null>(null);

    const handleClick: TimelineItemProps['onClick'] = (e) => {
        console.log(ref?.current);
    };

    return (
        <Timeline>
            <Timeline.Item
                ref={ref}
                type={'error'}
                label={'prdel 1 label'}
                onClick={handleClick}
            >
                <p>prdel 1</p>
            </Timeline.Item>
            <Timeline.Item type={'primary'} label={'prdel 2 label'}>
                <p>prdel 2</p>
            </Timeline.Item>
            <Timeline.Item type={'success'} label={'prdel 3 label'}>
                <p>prdel 3</p>
            </Timeline.Item>
            <Timeline.Item type={'warning'}>
                <p>prdel 4</p>
            </Timeline.Item>
            <Timeline.Item dot={<Icon name={'upload'} />} type={'warning'}>
                <p>prdel 5</p>
            </Timeline.Item>
        </Timeline>
    );
};
