import React, { useRef } from 'react';
import { Timeline, TimelineItem } from '../../src/components/Timeline/view';
import { Icon } from '../../src/components/Icon';
import {
    TimelineItemProps,
    TimelineOnClick,
} from '../../src/components/Timeline/view/Item/Item.types';
import { IconProps } from '../../src/components/Icon/types';
import { Text } from '../../src/components/Typography/Text';

export const FirstTimelineDemo = () => {
    const ref = useRef<HTMLLIElement | null>(null);
    const containerRef = useRef<HTMLUListElement | null>(null);

    const handleClick: TimelineItemProps['onClick'] = (
        e: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        console.log(`click`);
    };

    const handleClick2: TimelineOnClick = (e, i) => {
        console.log(i);
    };

    const handleIconClick: IconProps['onClick'] = (e) => {
        e.stopPropagation();
        console.log(e, 'iconClick');
    };

    return (
        <Timeline ref={containerRef}>
            <TimelineItem ref={ref} onClick={handleClick}>
                <Text>prdel 1</Text>
            </TimelineItem>
            <TimelineItem
                oppositeContent={<div>pepa</div>}
                onClick={handleClick2}
                unique={'pes'}
            >
                <Text>prdel 2</Text>
            </TimelineItem>
            <TimelineItem onClick={handleClick2} unique={1}>
                <Text>prdel 3</Text>
            </TimelineItem>
            <TimelineItem onClick={handleClick2} type={'warning'}>
                <Text>prdel 4</Text>
            </TimelineItem>
            <TimelineItem
                onClick={handleClick2}
                dot={<Icon name={'upload'} onClick={handleIconClick} />}
            >
                <Text>prdel 5</Text>
            </TimelineItem>
        </Timeline>
    );
};
