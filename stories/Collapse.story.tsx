import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Collapse } from '../src/components/Collapse';
import { Demo } from '../src/components/Collapse/demo';

const stories = storiesOf('Collapse', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => (
        <>
            <Demo />
        </>
    ),
    {
        info: { inline: true },
    }
);

stories.add(
    'Playground',
    () => {
        const collapse = <Collapse activeUnique={[1, 2]} />;

        return collapse;
    },
    {
        info: { inline: true },
    }
);
