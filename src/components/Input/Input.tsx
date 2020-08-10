import React, { FC } from 'react';
import {
    HTMLInputDefaultElementProps,
    PropsWithoutChildren,
} from '../../types';
import { Input } from './view';
import { InputEventProps, StyledInputProps } from './view/base/types';
import { useInputChange } from './hooks';

type InputType = FC<
    PropsWithoutChildren<
        StyledInputProps & HTMLInputDefaultElementProps & InputEventProps
    >
>;

export const InputHoc: InputType = ({ defaultValue, isDisabled, ...props }) => {
    const handlers = useInputChange({
        defaultValue,
        onChange: props?.onChange,
        isDisabled,
    });

    return <Input {...props} {...handlers} isDisabled={isDisabled} />;
};
