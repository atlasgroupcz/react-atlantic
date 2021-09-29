import React from 'react';
import {
    Checkbox as CheckboxView,
    CheckboxProps,
    useCheckbox,
    Text as NotStyledText,
} from '..';
import { disable, disableOnEvent } from './disableOnEvent';
import { wrap } from '@atlasgroup/react-wrap';
import styled from 'styled-components';

const Checkbox = wrap(CheckboxView, useCheckbox);

const Text = styled(NotStyledText)`
    color: ${({ theme }) => theme.color.text.gamma};
`;

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        isDisabled: {
            name: 'isDisabled',
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
        isPartiallyChecked: {
            name: 'isPartiallyChecked',
            control: {
                type: 'boolean',
            },
            defaultValue: false,
        },
        horizontalPosition: disable,
        size: disable,
        isChecked: disable,
        ...disableOnEvent,
    },
};

export const Overview = ({ isDisabled, isPartiallyChecked }: CheckboxProps) => (
    <Checkbox isDisabled={isDisabled} isPartiallyChecked={isPartiallyChecked}>
        <Text>Change me!</Text>
    </Checkbox>
);
