import React, { FC } from 'react';
import { InputEventProps, StyledInputProps } from './types';
import { HTMLInputDefaultElementProps } from '../../types';
import { useInputChange } from './hooks';
import { Input } from './view';

type InputType = FC<
    StyledInputProps & HTMLInputDefaultElementProps & InputEventProps
>;

export const InputHoc: InputType = ({ defaultValue, ...props }) => {
    const handlers = useInputChange({
        defaultValue,
        onChange: props?.onChange,
    });

    return <Input {...handlers} {...props} />;
};
