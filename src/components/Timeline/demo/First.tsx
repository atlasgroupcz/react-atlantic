import React, { useRef, useState, FC } from 'react';
import { Timeline } from '../view';
import { Icon } from '../../Icon';
import { TimelineItemProps, TimelineOnClick } from '../view/Item/Item.types';

export const FirstTimelineDemo = () => {
    const ref = useRef<HTMLLIElement | null>(null);

    const handleClick: TimelineItemProps['onClick'] = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        console.log(ref?.current);
    };

    const handleClick2: TimelineOnClick = (e, i) => {
        console.log(ref?.current);
        console.log(e, i);
    };

    // return (
    //     <Timeline>
    //         <CustomTimelineItem />
    //     </Timeline>
    // );

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
            <Timeline.Item
                onClick={handleClick2}
                type={'primary'}
                label={'prdel 2 label'}
                unique={1}
            >
                <p>prdel 2</p>
            </Timeline.Item>
            <Timeline.Item
                onClick={handleClick2}
                type={'success'}
                label={'prdel 3 label'}
            >
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

type CustomTimelineItemType = FC;
const CustomTimelineItem = () => {
    const icon = <Icon name={'upload'} />;
    return (
        <Timeline.Item dot={icon} type={'warning'}>
            <p>prdel 5</p>
        </Timeline.Item>
    );
};
