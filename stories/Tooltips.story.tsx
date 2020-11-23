import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Tooltips } from '../src';

const stories = storiesOf('Tooltips', module);

stories.add(
    'Playground',
    () => {
        return (
            <>
                <Tooltips>
                    <div>
                        <Text data-title="Hello world!">Hello world!</Text>
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
                </Tooltips>
                <br />
                <Tooltips contentAttr="data-custom">
                    <Text data-custom="Custom attributes!">
                        Custom attributes!
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
