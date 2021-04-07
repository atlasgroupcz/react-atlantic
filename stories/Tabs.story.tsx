import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { Button, Tabs, TabsProps } from '../src';
import { TabsFirstDemo } from './demos/Tabs';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <>{TabsFirstDemo()}</>, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        const numberOfTabs = number('NumberOfTabs', 1);
        const activeKey = number('ActiveKey', 0);
        const tabsProps: TabsProps = {
            List: ({ activeKey, onClick, ...props }) => {
                return (
                    <div {...props}>
                        {[...Array(numberOfTabs)].map((_, index) => (
                            <Button
                                key={index}
                                type={
                                    `${index}` === activeKey
                                        ? 'success'
                                        : 'error'
                                }
                            />
                        ))}
                    </div>
                );
            },
            activeKey: `${activeKey}`,
        };

        const tabs = (
            <Tabs tabIndex={1} {...tabsProps}>
                {[...Array(numberOfTabs)].map((_, index) => (
                    <div key={index}>{`Tab-${index}`}</div>
                ))}
            </Tabs>
        );
        return tabs;
    },
    {
        info: { inline: true },
    }
);
