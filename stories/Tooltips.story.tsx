import React, { FC, useEffect, useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Tooltips, useTooltip } from '../src';

const stories = storiesOf('Tooltips', module);

export interface ComponentProps {}
export type ComponentType = FC<ComponentProps>;

export const Component: ComponentType = () => {
    const [state, setState] = useState<number>(1);

    const tooltip = useTooltip();
    // useEffect(() => {
    //     setInterval(() => {
    //         setState((s) => s + 1);
    //     }, 1000);
    // }, []);

    return (
        <div>
            {!!(state % 10) &&
                [...new Array(20)].map((_, i) => (
                    <div>
                        <Text ref={tooltip} key={i} data-title={state}>
                            Hello world! {state}
                        </Text>
                    </div>
                ))}

            <br />
            <br />
            <Text>
                Custom position: (
                <Text data-title="left" data-position="left">
                    left
                </Text>
                ,{' '}
                <Text data-title="right" data-position="right">
                    right
                </Text>
                ,{' '}
                <Text data-title="top" data-position="top">
                    top
                </Text>
                ,{' '}
                <Text data-title="bottom" data-position="bottom">
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
