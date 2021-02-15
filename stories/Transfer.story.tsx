import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Transfer } from '../src/components/Transfer';
import { useTransfer } from '../src/components/Transfer/hooks/useTransfer';

const stories = storiesOf('Transfer', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => {
        const options = [
            { label: 'Label 1', value: 'Value 1' },
            { label: 'Label 2', value: 'Value 2' },
            { label: 'Label 3', value: 'Value 3' },
        ];

        const defaultValue = [options[0]];

        const transferProps = useTransfer({
            options,
            defaultValue,
            onSubmit: console.log,
        });

        return <Transfer {...transferProps} />;
    },
    {
        info: { inline: true },
    }
);
