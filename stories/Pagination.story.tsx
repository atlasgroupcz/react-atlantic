import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Pagination } from '../src';

const stories = storiesOf('Pagination', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <Pagination />, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        return <Pagination />;
    },
    {
        info: { inline: true },
    }
);
