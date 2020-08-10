import React, {
    ReactNode,
    FC,
    ComponentProps,
    PropsWithChildren,
    ReactElement,
} from 'react';

//TODO!: please do types :]
type WrapArgs<T extends FC<any>> = [T, Partial<ComponentProps<T>>, ReactNode?];
type Wrap<P extends {} = {}, T extends FC<P> & unknown = FC<P>> = (
    ...args: WrapArgs<T>
) => T;

export const wrap: Wrap = (View, controllerProps, viewChildren) => {
    return () => <View {...controllerProps}>{viewChildren}</View>;
};

type WrapCurried = <T extends {}>(
    View: FC<T>
) => (partialProps: T, children: ReactNode) => WrapCurriedValue<Partial<T>>;

type WrapCurriedValue<T extends {}> = (
    props?: PropsWithChildren<T>,
    context?: any
) => ReactElement<any, any> | null;

export const wrapCurried: WrapCurried = (View) => (
    partialProps,
    viewChildren
) => {
    return () => <View {...partialProps}>{viewChildren}</View>;
};
