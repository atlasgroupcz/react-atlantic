import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Transfer } from '../src/components/Transfer';
import { useTransfer } from '../src/components/Transfer/hooks/useTransfer';
import { TestComponentProps } from './types/TestComponentProps';
import { resolveStyle } from './utils/resolveStyle';

const stories = storiesOf('Transfer', module);

stories.addDecorator(withKnobs);

export const TestTransferComponent: FC<TestComponentProps> = ({ position }) => {
    const options = [
        { label: 'Label 1', value: 'Value 1' },
        { label: 'Label 2', value: 'Value 2' },
        { label: 'Label 3', value: 'Value 3' },
    ];

    const defaultValue = [options[0]];
    const transferProps = useTransfer({
        options,
        defaultValue,
        onSubmit: console.log,
    });

    return (
        <div style={resolveStyle(position)}>
            <Transfer {...transferProps} />
        </div>
    );
};

stories.add(
    'Overview',
    () => {
        const options = [
            { label: 'Label 1', value: 'Value 1' },
            { label: 'Label 2', value: 'Value 2' },
            { label: 'Label 3', value: 'Value 3' },
        ];

        const defaultValue = [options[0]];
        const transferProps = useTransfer({
            options,
            defaultValue,
            onSubmit: console.log,
        });

        return (
            <div style={{ height: '500px' }}>
                <Transfer {...transferProps} />
            </div>
        );
    },
    {
        info: { inline: true },
    }
);

stories.add('Testground', () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative',
            }}
        >
            <TestTransferComponent position={'top-left'} />
            <TestTransferComponent position={'top-right'} />
            <TestTransferComponent position={'bottom-left'} />
            <TestTransferComponent position={'bottom-right'} />
        </div>
    );
});
