import React, { useRef } from 'react';
import { Timeline, TimelineItem } from '../view';
import { Icon } from '../../Icon';
import { TimelineItemProps, TimelineOnClick } from '../view/Item/Item.types';
import { IconProps } from '../../Icon/types';
import { Text } from '../../Typography/Text';

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
        <Timeline ref={containerRef}>
            <TimelineItem ref={ref} onClick={handleClick}>
                <Text>prdel 1</Text>
            </TimelineItem>
            <TimelineItem onClick={handleClick2} unique={1}>
                <Text>prdel 2</Text>
            </TimelineItem>
            <TimelineItem onClick={handleClick2}>
                <Text>prdel 3</Text>
            </TimelineItem>
            <TimelineItem type={'warning'}>
                <Text>prdel 4</Text>
            </TimelineItem>
            <TimelineItem
                onClick={handleClick2}
                dot={<Icon name={'upload'} onClick={handleIconClick} />}
            >
                <Text onClick={handleChildrenClick}>prdel 5</Text>
            </TimelineItem>
        </Timeline>
    );
};
