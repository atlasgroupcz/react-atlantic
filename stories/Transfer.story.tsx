import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Transfer } from '../src/components/Transfer';
import { useTransfer } from '../src/components/Transfer/hooks/useTransfer';
import { TestComponentProps } from './types/TestComponentProps';
import { resolveStyle } from './utils/resolveStyle';
import { OptionType } from '../src';

const stories = storiesOf('Transfer', module);

stories.addDecorator(withKnobs);

const generateOptions = (num: number): OptionType<string, string>[] => {
    const options: OptionType<string, string>[] = [...new Array(num)].map(
        (_, i) => ({
            label: `Label ${i}`,
            value: `Value ${i}`,
        })
    );
    return options;
};

const LONG_LABEL_OPTION: OptionType<string, string> = {
    label: 'TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST',
    value: 'TEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEST',
};

export const TestTransferComponent: FC<TestComponentProps> = ({
    position,
    preferredPosition,
}) => {
    const options = [LONG_LABEL_OPTION, ...generateOptions(20)];

    const defaultValue = [options[0]];
    const transferProps = useTransfer({
        options,
        defaultValue,
    });

    return (
        <div style={resolveStyle(position)}>
            <Transfer
                {...transferProps}
                preferredPosition={preferredPosition}
            />
        </div>
    );
};

stories.add(
    'Overview',
    () => {
        const options = generateOptions(10);
        const defaultValue = [options[0]];
        const transferProps = useTransfer({
            options,
            defaultValue,
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

stories.add('Overflow Prevention', () => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                position: 'relative',
            }}
        >
            <TestTransferComponent
                position={'top-left'}
                preferredPosition={'left'}
            />
            <TestTransferComponent
                position={'top-right'}
                preferredPosition={'right'}
            />
            <TestTransferComponent
                position={'bottom-left'}
                preferredPosition={'bottom'}
            />
            <TestTransferComponent
                position={'bottom-right'}
                preferredPosition={'bottom'}
            />
        </div>
    );
});
