import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ProgressFirstDemo } from './demos/Progress';

const stories = storiesOf('Progress', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <>{ProgressFirstDemo()}</>, {
    info: { inline: true },
});
