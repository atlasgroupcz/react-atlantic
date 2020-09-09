import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { First } from '../src/components/Pagination/demo';

const stories = storiesOf('Pagination', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => First() as any, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        return First();
    },
    {
        info: { inline: true },
    }
);
