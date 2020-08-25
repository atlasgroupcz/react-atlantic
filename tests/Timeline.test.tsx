import React from 'react';
import { Timeline } from '../src/components/Timeline';
import { toBeDefinedTest, mountTest, mockPropsCheckTest } from './shared';
import { TimelineItemProps } from '../src/components/Timeline/view/Item/Item.types';
import { mount } from 'enzyme';
import { TimelineProps } from '../src/components/Timeline/view/Timeline.types';

const mockItemProps: TimelineItemProps = {
    dot: 'dot',
    label: 'label',
    unique: 1,
    type: 'error',
};

// describe('shared Timeline', () => {
//     toBeDefinedTest(Timeline);
//     mountTest(Timeline);
// });

// describe('shared TimelineItem', () => {
//     toBeDefinedTest(Timeline.Item, mockItemProps);
//     mockPropsCheckTest(mockItemProps, Timeline.Item);
//     mountTest(Timeline.Item);
// });

const renderer = (
    timelineProps: TimelineProps,
    itemProps: TimelineItemProps
) => {
    return (
        <Timeline {...timelineProps}>
            <Timeline.Item {...itemProps} />
        </Timeline>
    );
};

describe('Timeline - view', () => {
    const timelineClassName = 'custom-timeline-1';
    const itemClassName = 'custom-timelineItem-1';

    it('should keep the className', () => {
        const wrapper = mount(
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

    it('should has own dot component', () => {
        const dotClassName = 'own-dot';
        const dot: TimelineItemProps['dot'] = (
            <div className={`${dotClassName}`}>dot</div>
        );
        const wrapper = mount(
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
            wrapper.find(`.${itemClassName} .${dotClassName}`).exists()
        ).toBe(true);
    });

    it('should has own label component', () => {
        const labelClassName = 'own-label';
        const label: TimelineItemProps['label'] = (
            <div className={`${labelClassName}`}>label</div>
        );

        const wrapper = mount(
            renderer(
                {
                    className: timelineClassName,
                },
                {
                    label,
                    className: itemClassName,
                }
            )
        );
        expect(
            wrapper.find(`.${itemClassName} .${labelClassName}`).exists()
        ).toBe(true);
    });

    it('should has content on right side', () => {});
});
