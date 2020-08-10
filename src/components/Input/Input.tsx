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
        isDisabled,
        onChange: props?.onChange,
    });

    return <Input {...props} {...handlers} isDisabled={isDisabled} />;
};
