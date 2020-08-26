import React, { useRef } from 'react';
import { Timeline, TimelineItem } from '../view';
import { Icon } from '../../Icon';
import { TimelineItemProps, TimelineOnClick } from '../view/Item/Item.types';
import { IconProps } from '../../Icon/types';

export const FirstTimelineDemo = () => {
    const ref = useRef<HTMLLIElement | null>(null);
    const containerRef = useRef<HTMLUListElement | null>(null);

    const handleClick: TimelineItemProps['onClick'] = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        console.log(e);
        console.log(ref?.current);
    };

    const handleClick2: TimelineOnClick = (e, i) => {
        console.log(containerRef?.current);
        console.log(ref?.current);
        console.log(e, i);
    };

    const handleIconClick: IconProps['onClick'] = (e) => {
        e.stopPropagation();
        console.log(e, 'iconClick');
    };

    const handleChildrenClick = (
        e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
    ) => {
        e.stopPropagation();
        console.log(`handle Children click`);
    };

    return (
        <Timeline ref={containerRef} align={'alternate'}>
            <TimelineItem
                ref={ref}
                type={'error'}
                oppositeContent={'prdel 1 label'}
                onClick={handleClick}
            >
                <p>prdel 1</p>
            </TimelineItem>
            <TimelineItem
                onClick={handleClick2}
                type={'primary'}
                oppositeContent={'prdel 2 label'}
                unique={1}
            >
                <p>prdel 2</p>
            </TimelineItem>
            <TimelineItem
                onClick={handleClick2}
                type={'success'}
                oppositeContent={'prdel 3 label'}
            >
                <p>prdel 3</p>
            </TimelineItem>
            <TimelineItem type={'warning'}>
                <p>prdel 4</p>
            </TimelineItem>
            <TimelineItem
                onClick={handleClick2}
                dot={<Icon name={'upload'} onClick={handleIconClick} />}
                type={'warning'}
            >
                <p onClick={handleChildrenClick}>prdel 5</p>
            </TimelineItem>
        </Timeline>
    );
};
