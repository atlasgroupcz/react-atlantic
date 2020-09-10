import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Skeleton } from '../src/components/Skeleton/view';

const stories = storiesOf('Skeleton', module);

stories.addDecorator(withKnobs);

//Input-HOC
stories.add(
    'Overview',
    () => (
        <>
            <Skeleton width={50} height={50} />
        </>
    ),
    {
        info: { inline: true },
    }
);

//Input-VIEW
stories.add(
    'Playground',
    () => {
        const skeleton = <Skeleton width={50} height={50} />;

        return skeleton;
    },
    {
        info: { inline: true },
    }
);
