import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { Button, Tabs, TabsProps } from '../src';
// import { TabsFirstDemo } from './demos/Tabs';
import { useTabs } from '../src/components/Tabs/context';
import { Tab } from '../src/components/Tabs/components';

const TestComponent: FC = ({ children }) => {
    console.log(children);
    return <>{children}</>;
};
const stories = storiesOf('Tabs', module);

stories.addDecorator(withKnobs);

// stories.add('Overview', () => <>{TabsFirstDemo()}</>, {
//     info: { inline: true },
// });

stories.add(
    'Playground',
    () => {
        const numberOfTabs = number('NumberOfTabs', 5);
        // const activeKey = number('ActiveKey', 0);
        const tabsProps: TabsProps = {
            initialActiveId: 0,
            TabsController: () => {
                const { activeId, setActiveId } = useTabs();

                return (
                    <>
                        {[...Array(numberOfTabs)].map((_, index) => (
                            <Button
                                key={index}
                                type={index === activeId ? 'success' : 'error'}
                                onClick={() => setActiveId(index)}
                            ></Button>
                        ))}
                    </>
                );
            },
        };

        const tabs = (
            <Tabs {...tabsProps}>
                {[...Array(numberOfTabs)].map((_, index) => (
                    <Tab key={index} id={index}>
                        <TestComponent>{`Tab-${index}`}</TestComponent>
                    </Tab>
                ))}
            </Tabs>
        );
        return tabs;
    },
    {
        info: { inline: true },
    }
);
