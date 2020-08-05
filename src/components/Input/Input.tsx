import React, { FC } from 'react';
import { useInputChange } from './Controller';
import { InputView } from './View';
import { InputEventProps, StyledInputProps } from './types';
import { HTMLInputDefaultElementProps } from '../../types';

type InputType = FC<
    StyledInputProps & HTMLInputDefaultElementProps & InputEventProps
>;

export const Input: InputType = ({ defaultValue, ...props }) => {
    const handlers = useInputChange({
        defaultValue,
        onChange: props?.onChange,
    });

    return <InputView {...handlers} {...props} />;
};
