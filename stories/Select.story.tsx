import React from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Select } from '../src/components/Select/View';
import { useSelectChange } from '../src/components/Select/Hooks';
import { defaultValues } from './constants';
import { Size } from '../src/types';
import { action } from '@storybook/addon-actions';
import {
    ControllerSelectProps,
    SelectProps,
    StyledSelectProps,
} from '../src/components/Select/Types';

const stories = storiesOf('Select', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => {
        const handlers = useSelectChange({ isDisabled: false });
        const options = [
            { label: 'Label 1', value: 'Value 1' },
            { label: 'Label 2', value: 'Value 2' },
            { label: 'Label 3', value: 'Value 3' },
        ];

        return (
            <>
                <Select
                    options={options}
                    size={'small'}
                    {...handlers}
                    onChange={console.log}
                />
                <br />
                <Select options={options} isFullWidth {...handlers} />
                <br />
                <Select options={options} isMulti {...handlers} />
                <br />
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
        const options = [
            { label: 'Label 1', value: 'Value 1' },
            { label: 'Label 2', value: 'Value 2' },
            { label: 'Label 3', value: 'Value 3' },
        ];

        const isDisabled: SelectProps['isDisabled'] = boolean(
            `isDisabled:`,
            defaultValues.isDisabled
        );

        const isFullWidth: SelectProps['isFullWidth'] = boolean(
            `isFullWidth:`,
            defaultValues.isFullWidth
        );

        const isMulti: SelectProps['isMulti'] = boolean(
            `isMulti:`,
            defaultValues.isMulti
        );

        const isFocused: SelectProps['isFocused'] = boolean(
            `isFocused:`,
            false
        );

        const size: Size = select(
            `size:`,
            ['small', `medium`, 'large'],
            defaultValues.size
        ) as Size;

        const placeholder: SelectProps['placeholder'] = text(
            `placeholder`,
            defaultValues.placeholder
        );

        const onChange: SelectProps['onChange'] = action(`onChange`);

        const styledProps: StyledSelectProps = {
            isDisabled,
            isFullWidth,
            isMulti,
            isFocused,
            size,
        };

        const controlProps: ControllerSelectProps = {
            onChange,
            placeholder,
            options,
        };

        return <Select {...styledProps} {...controlProps} />;
    },
    {
        info: { inline: true },
    }
);
