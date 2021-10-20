import React, { ReactText } from 'react';
import { storiesOf } from '@storybook/react';
import {
    ControllerSelectProps,
    Icon,
    OptionType,
    Select,
    SelectMulti,
    SelectMultiOptionOptionType,
    SelectProps,
    Size,
    useSelect,
} from '../src';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { defaultValues } from './constants';
import { useSelectMulti } from '../src/components/Select/hooks/useSelectMulti';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => {
        const iconHandlers = useSelect<OptionType<number>>({
            options: [
                {
                    value: 1,
                    label: <Icon name={`flagCzech`} />,
                },
                {
                    value: 2,
                    label: <Icon name={`flagSlovakia`} />,
                },
                {
                    value: 3,
                    label: <Icon name={`flagEU`} />,
                },
            ],
            onOptionClick: console.log,
        });

        const textHandlers = useSelect<OptionType<number>>({
            options: [
                {
                    value: 1,
                    label: 'Česká Republika',
                },
                {
                    value: 2,
                    label: 'Slovenská Republika',
                },
                {
                    value: 3,
                    label: 'Evropa',
                },
            ],
        });

        const multiSelectHandlers = useSelectMulti<SelectMultiOptionOptionType>(
            {
                options: [
                    {
                        value: 1,
                        label: 'Česká Republika',
                    },
                    {
                        value: 2,
                        label: 'Slovenská Republika',
                    },
                    {
                        value: 3,
                        label: 'Evropa',
                    },
                ],
                onOptionClick: (option) => console.log(option.label),
                onValueClick: (option) => console.log(option.label),
            }
        );

        const multiSelectHandlers2 = useSelectMulti<
            SelectMultiOptionOptionType
        >({
            options: [
                {
                    value: 1,
                    label: 'Česká Republika',
                },
                {
                    value: 2,
                    label: 'Slovenská Republika',
                },
                {
                    value: 3,
                    label: 'UK',
                },
                {
                    value: 4,
                    label: 'USA',
                },
                {
                    value: 5,
                    label: 'Čína',
                },
            ],
            onOptionClick: (option) => console.log(option.label),
            onValueClick: (option) => console.log(option.label),
        });

        return (
            <>
                <Select isFullWidth size={'large'} {...iconHandlers} />
                <Select {...textHandlers} />
                <SelectMulti
                    size={'large'}
                    isFullWidth
                    {...multiSelectHandlers}
                />
                <div style={{ maxWidth: 500 }}>
                    <SelectMulti
                        size={'medium'}
                        isFullWidth
                        {...multiSelectHandlers2}
                    />
                </div>
            </>
        );
    },
    {
        info: { inline: true },
    }
);

stories.add(
    'Playground',
    () => {
        const isFullWidth: SelectProps['isFullWidth'] = boolean(
            `isFullWidth:`,
            defaultValues.isFullWidth
        );
        const size: Size = select(
            `size:`,
            ['small', `medium`, 'large'],
            defaultValues.size
        ) as Size;

        const selectProps: ControllerSelectProps<OptionType<number>> = {
            options: [
                {
                    value: 1,
                    label: 'Label 1',
                },
                {
                    value: 2,
                    label: 'Label 2',
                },
                {
                    value: 3,
                    label: 'Label 3',
                },
                {
                    value: 4,
                    label:
                        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                },
            ],
        };

        const demoSelectHandlers = useSelect<OptionType<number>>({
            ...selectProps,
        });

        return (
            <div>
                <Select
                    isFullWidth={isFullWidth}
                    size={size}
                    {...demoSelectHandlers}
                />
            </div>
        );
    },
    {
        info: { inline: true },
    }
);
