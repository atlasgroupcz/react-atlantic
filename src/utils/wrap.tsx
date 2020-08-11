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
) => (
    partialProps: T | (WrapCurriedHook<T> & any),
    children: ReactNode
) => WrapCurriedValue<Partial<T>>;

type WrapCurriedHook<T extends {} = {}> = () => T;
type WrapCurriedValue<T extends {}> = (
    props?: PropsWithChildren<T>,
    context?: any
) => ReactElement<any, any> | null;

//TODO!: make better types please :]
export const wrapCurried: WrapCurried = (View) => (
    partialProps,
    viewChildren
) => {
    if (partialProps instanceof Function) {
        return () => {
            const hookProps = partialProps({});
            return <View {...hookProps}>{viewChildren}</View>;
        };
    }
    return () => <View {...partialProps}>{viewChildren}</View>;
};
