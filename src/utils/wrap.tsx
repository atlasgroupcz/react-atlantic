import React, { ReactNode, FC, ReactElement } from 'react';

//TODO!: please do types :]
type WrapValue = ReactElement;
type WrapArgs<T extends FC<T>> = [T, any, ReactNode?];
type Wrap<T extends FC<any> = FC<any>> = (...args: WrapArgs<T>) => WrapValue;

export const wrap: Wrap = (View, controllerProps, viewChildren) => {
    return <View {...controllerProps}>{viewChildren}</View>;
};
