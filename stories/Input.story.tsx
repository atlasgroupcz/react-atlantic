import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { defaultValues } from './constants';
import {
    ControllerInputProps,
    InputProps,
    InputView,
    Size,
    StyledInputProps,
} from '../src';
import { Input } from '../src/components/Input/Input';

const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

//Input-HOC
stories.add('Overview', () => <Input size={'large'} />, {
    info: { inline: true },
});

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

        const button = <InputView {...styledProps} {...controlProps} />;

        return button;
    },
    {
        info: { inline: true },
    }
);
