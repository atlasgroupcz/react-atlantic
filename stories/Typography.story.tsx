import * as React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Typography } from '../src';
import { defaultValues } from './constants';

const stories = storiesOf('Typography', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => {
    const { Title, Text, Link } = Typography;

    return (
        <div>
            <div>
                <Title level={1}>{`Title 1`}</Title>
                <Title level={2}>{`Title 2`}</Title>
                <Title level={3}>{`Title 3`}</Title>
                <Title level={4}>{`Title 4`}</Title>
                <Title level={5}>{`Title 5`}</Title>
            </div>
            <div>
                <div>
                    <Text>{`Text`}</Text>
                </div>
                <div>
                    <Text element={'strong'}>{`Strong Text`}</Text>
                </div>
                <div>
                    <Text element={'code'}>{`Code Text`}</Text>
                </div>
                <div>
                    <Text element={'del'}>{`Del Text`}</Text>
                </div>
                <div>
                    <Text element={'mark'}>{`Mark Text`}</Text>
                </div>
            </div>

            <div>
                <Link>{`Link`}</Link>
            </div>
        </div>
    );
});

stories.add(
    'Playground',
    () => {
        const { Text, Title, Link } = Typography;
        const children = text(`text:`, defaultValues.value);
        const level = select(`level:`, [1, 2, 3, 4, 5], 1);

        return (
            <div>
                <div>
                    <Title level={level}>{children}</Title>
                </div>

                <div>
                    <Text>{children}</Text>
                </div>

                <div>
                    <Link>{children}</Link>
                </div>
            </div>
        );
    },
    {
        info: { inline: true },
    }
);
