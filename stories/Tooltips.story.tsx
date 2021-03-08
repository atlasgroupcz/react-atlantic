import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Tooltips } from '../src';

const stories = storiesOf('Tooltips', module);

stories.add(
    'Playground',
    () => {
        const [state, setState] = useState<number>(0);

        useEffect(() => {
            setInterval(() => {
                setState((s) => s + 1);
            }, 1000);
        }, []);

        return (
            <>
                <Tooltips>
                    <div>
                        {<Text data-title={state}>Hello world! {state}</Text>}
                        <br />
                        <br />
                        {[...new Array(1)].map((_, i) => (
                            <Text key={i}>
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
                                <Text
                                    data-title="bottom"
                                    data-position="bottom"
                                >
                                    bottom
                                </Text>
                                )
                            </Text>
                        ))}
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
