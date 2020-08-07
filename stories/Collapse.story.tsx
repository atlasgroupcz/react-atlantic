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
            <Collapse activeKey={[1, 2]}>
                <Panel header="ahoj" unique="1">
                    <p>prdel 1</p>
                </Panel>
                <Panel header="ahoj" unique="2">
                    <p>prdel 2</p>
                </Panel>
                <Panel header="ahoj" unique="3">
                    <p>prdel 3</p>
                </Panel>
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
        const collapse = <Collapse activeKey={[1, 2]} />;

        return collapse;
    },
    {
        info: { inline: true },
    }
);
