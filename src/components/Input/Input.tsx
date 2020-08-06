import React, { FC } from 'react';
import { HTMLInputDefaultElementProps } from '../../types';
import { Input } from './view';
import { InputEventProps, StyledInputProps } from './view/base/types';
import { useInputChange } from './hooks';

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
