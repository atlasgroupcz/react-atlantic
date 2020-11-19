import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { defaultValues } from './constants';
import {
    ControllerTextAreaProps,
    Size,
    StyledTextAreaProps,
    TextArea,
    TextAreaProps,
} from '../src';

const stories = storiesOf('TextArea', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => (
        <>
            <TextArea size={'large'} />
            <br />
            <TextArea size={'medium'} />
            <br />
            <TextArea size={'small'} />
            <br />
            <TextArea size={'large'} isFullWidth />
            <br />
            <TextArea size={'large'} isDisabled />
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
        const isDisabled: TextAreaProps['isDisabled'] = boolean(
            `isDisabled:`,
            defaultValues.isDisabled
        );
        const placeholder: TextAreaProps['placeholder'] = text(
            `placeholder`,
            defaultValues.placeholder
        );

        const allowResize: TextAreaProps['allowResize'] = boolean(
            `allowResize`,
            defaultValues.allowResize
        );

        const isFullWidth: TextAreaProps['isFullWidth'] = boolean(
            `isFullWidth`,
            defaultValues.isFullWidth
        );
        const size: Size = select(
            `size:`,
            ['small', `medium`, 'large'],
            defaultValues.size
        ) as Size;

        const value: TextAreaProps['value'] = text(`value:`, ``);

        const onChange: TextAreaProps['onChange'] = action(`onChange`);

        const styledProps: StyledTextAreaProps = {
            isDisabled,
            isFullWidth,
            size,
            allowResize,
            placeholder,
        };

        const controlProps: ControllerTextAreaProps = {
            onChange,
            value,
        };

        const textArea = <TextArea {...styledProps} {...controlProps} />;

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '500px',
                }}
            >
                <div style={{ width: '100%' }}>{textArea}</div>
            </div>
        );
    },
    {
        info: { inline: true },
    }
);
