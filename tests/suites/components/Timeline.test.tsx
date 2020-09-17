import React from 'react';
import { Timeline, TimelineItem } from '../../../src/components/Timeline';
import { toBeDefinedTest, mountTest } from '../../shared';
import { TimelineItemProps } from '../../../src/components/Timeline/view/Item/Item.types';
import { mountWithTheme } from '../../utils/mountWithTheme';
import { TimelineProps } from '../../../src/components/Timeline/types';

const mockItemProps: TimelineItemProps = {
    dot: 'dot',
    oppositeContent: 'oppositeContent',
    unique: 1,
    type: 'error',
};

const mockTimelineProps: TimelineProps = {
    align: 'right',
};

const mockItemContent = 'prdel';

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
            <TimelineItem {...itemProps}>{mockItemContent}</TimelineItem>
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

    it('should has correct position as child of timeline depend on align', () => {
        const wrapper = mountWithTheme(
            renderer(
                {
                    ...mockTimelineProps,
                    className: timelineClassName,
                },
                {
                    ...mockItemProps,
                    className: itemClassName,
                }
            )
        );
        expect(wrapper.props().align).toBe(mockTimelineProps.align);
        expect(
            wrapper.find(`.${itemClassName} li`).children().at(0).text()
        ).toBe(mockItemProps.oppositeContent);
        expect(
            wrapper.find(`.${itemClassName} li`).children().at(2).text()
        ).toBe(mockItemContent);

        wrapper.setProps({ align: 'left' });
        expect(
            wrapper.find(`.${itemClassName} li`).children().at(2).text()
        ).toBe(mockItemProps.oppositeContent);
        expect(
            wrapper.find(`.${itemClassName} li`).children().at(0).text()
        ).toBe(mockItemContent);
    });

    it('should has correct position in align alternate', () => {
        const wrapper = mountWithTheme<typeof Timeline>(
            <Timeline {...mockTimelineProps}>
                <TimelineItem {...mockItemProps}>
                    {mockItemContent}
                </TimelineItem>
                <TimelineItem {...mockItemProps}>
                    {mockItemContent}
                </TimelineItem>
            </Timeline>
        );

        wrapper.setProps({ align: 'alternate' });
        expect(
            wrapper
                .find(`ul`)
                .children()
                .at(0)
                .find(`li`)
                .children()
                .at(0)
                .text()
        ).toBe(mockItemProps.oppositeContent);
        expect(
            wrapper
                .find(`ul`)
                .children()
                .at(0)
                .find(`li`)
                .children()
                .at(2)
                .text()
        ).toBe(mockItemContent);

        expect(
            wrapper
                .find(`ul`)
                .children()
                .at(1)
                .find(`li`)
                .children()
                .at(0)
                .text()
        ).toBe(mockItemContent);
        expect(
            wrapper
                .find(`ul`)
                .children()
                .at(1)
                .find(`li`)
                .children()
                .at(2)
                .text()
        ).toBe(mockItemProps.oppositeContent);
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
