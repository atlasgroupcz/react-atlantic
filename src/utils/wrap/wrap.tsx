import { FC, ComponentPropsWithoutRef } from 'react';
import React from 'react';
/**
 * Creates an implementation of a *react-atlantic* component using a View and a Controller hook
 * @param View A view component
 * @param useController A controller hook, can be parametrized with a object parameter
 *
 * Any paramaters passed to controller will be passed as props to the resulting component
 */
export const wrap = <
    V extends FC<any>,
    C extends (argsObj: any) => ComponentPropsWithoutRef<V>
>(
    View: V,
    useController: C
): FC<Parameters<C>[0]> => ({ children, ...controllerArgs }) => {
    const AnyView = View as any;
    const controller = useController(controllerArgs);
    return <AnyView {...controller}>{children}</AnyView>;
};

//! Usage:
// const useInput = ({ myprop }: { myprop: number }): InputProps => {
//     const { onChange, value } = useInputChange();
//     return { size: 'medium', onChange, value };
// };
// const Input = wrap(InputView, useInput);
// <Input myprop={7} />;
