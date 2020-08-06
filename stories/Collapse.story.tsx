import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Collapse } from '../src/components/Collapse';
import { Panel } from '../src/components/Collapse/Panel';

const stories = storiesOf('Collapse', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => (
        <>
            <Collapse>
                <Panel unique="1">prdel 1</Panel>
                <Panel unique="2">prdel 2</Panel>
                <Panel unique="3">prdel 3</Panel>
            </Collapse>
        </>
    ),
    {
        info: { inline: true },
    }
);

stories.add(
    'Playground',
    () => {
        const collapse = <Collapse />;

        return collapse;
    },
    {
        info: { inline: true },
    }
);
