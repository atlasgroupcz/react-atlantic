import React, { FC, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../src';
import { Tooltips, useTooltip } from '../src/components/Tooltips';

const stories = storiesOf('Tooltips', module);

export interface ComponentProps {}
export type ComponentType = FC<ComponentProps>;

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
            <>
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
            </>
        );
    },
    {
        info: { inline: true },
    }
);
//
