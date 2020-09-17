import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { TabsFirst } from '../src/components/Tabs/demo/TabsFirst';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <>{TabsFirst()}</>, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        const tabs = TabsFirst();

        return tabs;
    },
    {
        info: { inline: true },
    }
);
