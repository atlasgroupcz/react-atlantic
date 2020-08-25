import React, { ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, text, withKnobs } from '@storybook/addon-knobs';
import { FirstTimelineDemo } from '../src/components/Timeline/demo';
import { TimelineItemProps } from '../src/components/Timeline/view/Item/Item.types';
import { Type } from '../src/types';
import { defaultValues } from './constants';
import { Timeline, TimelineItem } from '../src/components/Timeline/view';
import { Icon } from '../src/components/Icon';
import { Text } from '../src/components/Typography';

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
            ['default', 'primary', 'success', 'warning', 'error', 'dashed'],
            defaultValues.type
        ) as Type;

        const label: TimelineItemProps['label'] = text('label', ``);

        const dotType = select(
            `dot:`,
            ['default', 'iconClock', 'iconUser', 'prdelText'],
            defaultValues.type
        ) as DotFactoryArgs;

        const dot = dotFactory(dotType);

        const props: TimelineItemProps = {
            type,
            label,
            dot,
        };

        const timeline = (
            <Timeline>
                {[...Array(numberOfItems).keys()].map((_, i) => (
                    <TimelineItem {...props}>{`item ${i}`}</TimelineItem>
                ))}
            </Timeline>
        );

        return timeline;
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
