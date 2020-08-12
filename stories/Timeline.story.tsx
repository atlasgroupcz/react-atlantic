import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Timeline', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <>PRDEL 2</>, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        return <>PRDEL</>;
    },
    {
        info: { inline: true },
    }
);
