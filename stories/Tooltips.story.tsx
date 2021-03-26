import React, { FC, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../src';
import { Tooltips, useTooltip } from '../src/components/Tooltips';
import { resolveStyle } from './utils/resolveStyle';
import { TestComponentProps } from './types/TestComponentProps';

const stories = storiesOf('Tooltips', module);

export interface ComponentProps {}
export type ComponentType = FC<ComponentProps>;

const TEST_TOOLTIP = 'TEEEEEEEEEEEEST TOOOOOOOOOOOOLTIP';
export type TestComponentType = FC<TestComponentProps>;

export const TestComponent: TestComponentType = ({ position }) => {
    const tooltip = useTooltip();

    return (
        <div style={resolveStyle(position)}>
            <div>
                <Text
                    ref={tooltip}
                    data-position="top"
                    data-title={TEST_TOOLTIP}
                >
                    Hello world 0!
                </Text>
            </div>
            <div>
                <Text
                    ref={tooltip}
                    data-position="right"
                    data-title={TEST_TOOLTIP}
                >
                    Hello world 1!
                </Text>
            </div>
            <div>
                <Text
                    ref={tooltip}
                    data-position="left"
                    data-title={TEST_TOOLTIP}
                >
                    Hello world 2!
                </Text>
            </div>
            <div>
                <Text
                    ref={tooltip}
                    data-position="bottom"
                    data-title={TEST_TOOLTIP}
                >
                    Hello world 3!
                </Text>
            </div>
        </div>
    );
};

export const Component: ComponentType = () => {
    const [state] = useState<number>(1);
    const tooltip = useTooltip();

    return (
        <div>
            <div>
                <Text ref={tooltip} data-title={state}>
                    Hello world 0! {state}
                </Text>
            </div>
            <div>
                <Text ref={tooltip} data-title={state}>
                    Hello world 1! {state}
                </Text>
            </div>
            <div>
                <Text ref={tooltip} data-title={state}>
                    Hello world 2! {state}
                </Text>
            </div>
            <div>
                <Text ref={tooltip} data-title={state}>
                    Hello world 3! {state}
                </Text>
            </div>

            <br />
            <br />
            <Text>
                Custom position: (
                <Text ref={tooltip} data-title="left" data-position="left">
                    left
                </Text>
                ,{' '}
                <Text ref={tooltip} data-title="right" data-position="right">
                    right
                </Text>
                ,{' '}
                <Text ref={tooltip} data-title="top" data-position="top">
                    top
                </Text>
                ,{' '}
                <Text ref={tooltip} data-title="bottom" data-position="bottom">
                    bottom
                </Text>
                )
            </Text>
        </div>
    );
};

stories.add(
    'Playground',
    () => {
        return (
            <div>
                <Tooltips>
                    <Component />
                </Tooltips>
                <br />
                <Tooltips contentAttr="data-custom">
                    <Text data-custom="Custom attributes!">
                        Custom attributes!
                    </Text>
                </Tooltips>
                <br />
                <Tooltips transition="opacity: 1;transition: all 1s; ">
                    <Text data-title="Custom transition!">
                        Custom transition!
                    </Text>
                </Tooltips>
            </div>
        );
    },
    {
        info: { inline: true },
    }
);
//

stories.add('Overflow Prevention', () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative',
            }}
        >
            <Tooltips>
                <TestComponent position={'top-left'} />
                <TestComponent position={'top-right'} />
                <TestComponent position={'bottom-left'} />
                <TestComponent position={'bottom-right'} />
            </Tooltips>
        </div>
    );
});
