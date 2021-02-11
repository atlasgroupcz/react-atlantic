import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { defaultValues } from './constants';
import { Size, Type, Button, SimpleButton, PureButton } from '../src';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add(
    'Overview',
    () => (
        <>
            <Button htmlType="submit">Prdel</Button>
            <Button htmlType="submit" isDisabled type="primary">
                Prdel
            </Button>
            <PureButton htmlType="submit">Prdel</PureButton>
            <SimpleButton htmlType="submit">Prdel</SimpleButton>
            <Button as={'a'}>Odkaz</Button>
        </>
    ),
    {
        info: { inline: true },
    }
);

stories.add(
    'Playground',
    () => {
        const isDisabled = boolean(`isDisabled:`, defaultValues.isDisabled);
        const isFullWidth = boolean(`isFullWidth:`, defaultValues.isFullWidth);
        const isRound = boolean(`isRound:`, defaultValues.isRound);
        const isTransparent = boolean(
            `isTransparent:`,
            defaultValues.isTransparent
        );
        const size: Size = select(
            `size:`,
            ['small', `medium`, 'large'],
            defaultValues.size
        ) as Size;
        const type: Type = select(
            `type:`,
            ['default', 'primary', 'success', 'warning', 'error', 'dashed'],
            defaultValues.type
        ) as Type;
        const children = text(`text:`, defaultValues.value);
        const onClick = action(`onClick`);

        const button = (
            <Button
                isDisabled={isDisabled}
                isFullWidth={isFullWidth}
                isRound={isRound}
                isTransparent={isTransparent}
                size={size}
                type={type}
                onClick={onClick}
            >
                {children}
            </Button>
        );

        return button;
    },
    {
        info: { inline: true },
    }
);
