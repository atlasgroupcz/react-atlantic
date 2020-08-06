import * as React from 'react';
import { select, withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Icon } from '../src';
import { IconName, IconsMap } from '../src/components/Icon/IconsMap';

const stories = storiesOf('Icon', module);
const iconNames = Object.keys(IconsMap) as IconName[];

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => (
        <div>
            {iconNames.map((iconName) => (
                <Icon name={iconName} />
            ))}
        </div>
    ),
    {
        info: { inline: true },
    }
);

stories.add(
    'Playground',
    () => {
        const name = select(`name:`, iconNames, iconNames[0]) as IconName;
        const isRotating = boolean(`isRotating:`, false);

        return <Icon name={name} isRotating={isRotating} />;
    },
    {
        info: { inline: true },
    }
);
