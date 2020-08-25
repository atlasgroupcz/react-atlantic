import React, { ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, text, withKnobs } from '@storybook/addon-knobs';
import { FirstTimelineDemo } from '../src/components/Timeline/demo';
import { Type } from '../src/types';
import { defaultValues } from './constants';
import { Timeline, TimelineItem } from '../src/components/Timeline/view';
import { Icon } from '../src/components/Icon';
import { Text } from '../src/components/Typography';
import { TimelineProps } from '../src/components/Timeline/view/Timeline.types';
import { TimelineItemProps } from '../src/components/Timeline/view/Item/Item.types';

const stories = storiesOf('Timeline', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <>{FirstTimelineDemo()}</>, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        const numberOfItems = number('numberOfPanels', 5);

        const type: Type = select(
            `type:`,
            ['default', 'primary', 'success', 'warning', 'error'],
            defaultValues.type
        ) as Type;

        const oppositeContent: TimelineItemProps['oppositeContent'] = text(
            'oppositeContent',
            ``
        );

        const dotType = select(
            `dot:`,
            ['default', 'iconClock', 'iconUser', 'prdelText'],
            defaultValues.type
        ) as DotFactoryArgs;

        const dot = dotFactory(dotType);

        const align: TimelineProps['align'] = select(
            'align',
            ['right', 'left', 'alternate'],
            'right'
        );

        const timelineItemProps: TimelineItemProps = {
            type,
            oppositeContent,
            dot,
        };

        const timelineProps: TimelineProps = {
            align,
        };

        return (
            <Timeline {...timelineProps}>
                {[...Array(numberOfItems).keys()].map((_, i) => (
                    <TimelineItem
                        key={i}
                        {...timelineItemProps}
                    >{`item ${i}`}</TimelineItem>
                ))}
            </Timeline>
        );
    },
    {
        info: { inline: true },
    }
);

type DotFactoryArgs = 'default' | 'iconClock' | 'iconUser' | 'prdelText';
type DotFactoryType = (args: DotFactoryArgs) => TimelineItemProps['dot'];
type FactoryObjectType = Record<DotFactoryArgs, undefined | ReactNode>;
const dotFactory: DotFactoryType = (args) => {
    const obj: FactoryObjectType = {
        default: undefined,
        iconClock: <Icon name={'star'} />,
        iconUser: <Icon name={'user'} />,
        prdelText: <Text>prdel</Text>,
    };
    return obj[args];
};
