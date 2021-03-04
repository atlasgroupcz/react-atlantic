import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon, OptionType, Select, useSelect } from '../src';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => {
        const options: OptionType<number>[] = [
            {
                value: 1,
                label: <Icon name={`flagCzech`} />,
            },
            {
                value: 2,
                label: <Icon name={`flagSlovakia`} />,
            },
            {
                value: 3,
                label: <Icon name={`flagEU`} />,
            },
        ];

        const handlers = useSelect<OptionType<number>>({
            options,
            onOptionClick: console.log,
        });

        return (
            <>
                <Select {...handlers} />
            </>
        );
    },
    {
        info: { inline: true },
    }
);
