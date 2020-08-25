import React from 'react';
import { Timeline, TimelineItem } from '../src/components/Timeline';
import { toBeDefinedTest, mountTest } from './shared';
import { TimelineItemProps } from '../src/components/Timeline/view/Item/Item.types';
import { TimelineProps } from '../src/components/Timeline/view/Timeline.types';
import { mountWithTheme } from './utils/mountWithTheme';

const mockItemProps: TimelineItemProps = {
    dot: 'dot',
    oppositeContent: 'label',
    unique: 1,
    type: 'error',
};

describe('shared Timeline', () => {
    toBeDefinedTest(Timeline);
    mountTest(Timeline);
});

describe('shared TimelineItem', () => {
    toBeDefinedTest(TimelineItem, mockItemProps);
    mountTest(TimelineItem);
});

const renderer = (
    timelineProps: TimelineProps,
    itemProps: TimelineItemProps
) => {
    return (
        <Timeline {...timelineProps}>
            <TimelineItem {...itemProps} />
        </Timeline>
    );
};

describe('Timeline - view', () => {
    const timelineClassName = 'custom-timeline-1';
    const itemClassName = 'custom-timelineItem-1';

    it('should keep the className', () => {
        const wrapper = mountWithTheme(
            renderer(
                {
                    className: timelineClassName,
                },
                {
                    className: itemClassName,
                }
            )
        );

        expect(wrapper.find(`.${itemClassName}`).exists()).toBe(true);
        expect(wrapper.find(`.${timelineClassName}`).exists()).toBe(true);
    });

    it('should has 3 children', () => {
        const wrapper = mountWithTheme(
            renderer(
                {
                    className: timelineClassName,
                },
                {
                    ...mockItemProps,
                    className: itemClassName,
                }
            )
        );

        expect(wrapper.find(`.${itemClassName} li`).children().length).toBe(3);
    });

    it('should has own dot component', () => {
        const dotClassName = 'own-dot';
        const dot: TimelineItemProps['dot'] = (
            <div className={`${dotClassName}`}>dot</div>
        );
        const wrapper = mountWithTheme(
            renderer(
                {
                    className: timelineClassName,
                },
                {
                    dot,
                    className: itemClassName,
                }
            )
        );

        expect(
            wrapper.find(`.${itemClassName} li .${dotClassName}`).exists()
        ).toBe(true);

        /**
         * Without oppositeContent should be len of children equals to 2..
         * */
        expect(wrapper.find(`.${itemClassName} li`).children().length).toBe(2);
        expect(
            wrapper
                .find(`.${itemClassName} li .${dotClassName}`)
                .children()
                .text()
        ).toEqual(mockItemProps.dot);
    });

    it('should has own oppositeContent component', () => {
        const oppositeContentClassName = 'own-label';
        const oppositeContent: TimelineItemProps['oppositeContent'] = (
            <div className={`${oppositeContentClassName}`}>label</div>
        );

        const wrapper = mountWithTheme(
            renderer(
                {
                    className: timelineClassName,
                },
                {
                    oppositeContent: oppositeContent,
                    className: itemClassName,
                }
            )
        );
        expect(
            wrapper
                .find(`.${itemClassName} .${oppositeContentClassName}`)
                .exists()
        ).toBe(true);
    });
});
