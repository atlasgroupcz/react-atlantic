import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { defaultValues } from './constants';
import { Icon, Input, Size } from '../src';
import {
    ControllerInputProps,
    InputProps,
    StyledInputProps,
} from '../src/components/Input/view/base/types';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

//Input-HOC
stories.add(
    'Overview',
    () => (
        <>
            <Input size={'large'} />
            <br />
            <Input size={'large'} prefix={<Icon name={'user'} />} />
        </>
    ),
    {
        info: { inline: true },
    }
);

//Input-VIEW
stories.add(
    'Playground',
    () => {
        const isDisabled: InputProps['isDisabled'] = boolean(
            `isDisabled:`,
            defaultValues.isDisabled
        );
        const isFullWidth: InputProps['isFullWidth'] = boolean(
            `isFullWidth:`,
            defaultValues.isFullWidth
        );
        const isRound: InputProps['isRound'] = boolean(
            `isRound:`,
            defaultValues.isRound
        );
        const size: Size = select(
            `size:`,
            ['small', `medium`, 'large'],
            defaultValues.size
        ) as Size;

        const value: InputProps['value'] = text(`value:`, ``);
        const placeholder: InputProps['placeholder'] = text(
            `placeholder`,
            defaultValues.placeholder
        );

        const onChange: InputProps['onChange'] = action(`onChange`);

        const styledProps: StyledInputProps = {
            isDisabled,
            isFullWidth,
            isRound,
            size,
            placeholder,
        };

        const controlProps: ControllerInputProps = {
            onChange,
            value,
        };

        const button = <Input {...styledProps} {...controlProps} />;

        return button;
    },
    {
        info: { inline: true },
    }
);
