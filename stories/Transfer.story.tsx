import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Transfer } from '../src/components/Transfer';
import { useTransfer } from '../src/components/Transfer/hooks/useTransfer';
import { TestComponentProps } from './types/TestComponentProps';
import { resolveStyle } from './utils/resolveStyle';
import { InputDefaultProps, OptionType } from '../src';

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

const returnStringFromElement = (
    element: string | React.ReactElement
): string => {
    if (typeof element === 'string') {
        return element;
    } else if (typeof element === 'object') {
        return element.props.children;
    } else {
        throw new Error('Unsupported type');
    }
};

// Custom functions for tranfer
const filterFactory = (value: InputDefaultProps['value']) => {
    const normalizedValue = returnStringFromElement(value as string)
        ?.trim()
        .toLowerCase();
    return (option: OptionType<string, string | React.ReactElement>) => {
        const normalizedOptionLabel = returnStringFromElement(
            option.label
        ).toLocaleLowerCase();
        return normalizedOptionLabel.includes(normalizedValue);
    };
};

const createInputPlaceholder = (
    options?: OptionType<string, string | React.ReactElement>[]
) => options?.map(({ label }) => returnStringFromElement(label)).join(`, `);

const sortTransferOptions = <
    T extends OptionType<string, string | React.ReactElement>
>(
    options: T[]
): T[] =>
    options.sort((a, b) =>
        returnStringFromElement(a.label)
            .toString()
            .localeCompare(returnStringFromElement(b.label).toString())
    );

const transferOptionClick = (
    option: OptionType<string, string | React.ReactElement>,
    prevStateValue?: OptionType<string, string | React.ReactElement>[]
) => {
    if (!prevStateValue) return [];

    return prevStateValue.some(
        (item) =>
            returnStringFromElement(item.value) ===
            returnStringFromElement(option.value)
    )
        ? prevStateValue.filter(
              (item) =>
                  returnStringFromElement(item.value) !==
                  returnStringFromElement(option.value)
          )
        : [...prevStateValue, option];
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
        const options = [
            ...generateOptions(10),
            { label: <span>Label 3.0</span>, value: 'thespecialone' },
        ];

        const defaultValue = [options[0]];
        const transferProps = useTransfer<
            OptionType<string, string | React.ReactElement>
        >({
            options,
            defaultValue,
            transferOptionClick,
            sortTransferOptions,
            createInputPlaceholder,
            filterFactory,
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
