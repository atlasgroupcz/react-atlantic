import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { TabsFirst } from '../src/components/Tabs/demo/TabsFirst';
import { Button, Tabs, TabsProps } from '../src';
import { TabListDemo } from '../src/components/Tabs/demo/List';

const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

stories.add('Overview', () => <>{TabsFirst()}</>, {
    info: { inline: true },
});

stories.add(
    'Playground',
    () => {
        const numberOfTabs = number('NumberOfTabs', 1);
        const activeKey = number('ActiveKey', 1);
        const tabsProps: TabsProps = {
            List: ({ activeKey }) => {
                return (
                    <>
                        {[...Array(numberOfTabs)].map((_, index) => (
                            <Button
                                type={
                                    `${index}` === activeKey
                                        ? 'success'
                                        : 'error'
                                }
                            ></Button>
                        ))}
                    </>
                );
            },
            activeKey: `${activeKey}`,
        };

        const tabs = (
            <Tabs {...tabsProps}>
                {[...Array(numberOfTabs)].map((_, index) => (
                    <div>{`Tab-${index} `}</div>
                ))}
            </Tabs>
        );
        return tabs;
    },
    {
        info: { inline: true },
    }
);
