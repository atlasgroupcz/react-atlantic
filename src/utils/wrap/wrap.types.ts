import { FC, ReactNode, PropsWithChildren, ReactElement } from 'react';

export type WrapCurried = <T extends {}>(
    View: FC<T>
) => (
    partialProps: T | (WrapCurriedHook<T> & any),
    children: ReactNode
) => WrapCurriedValue<Partial<T>>;

export type WrapCurriedHook<T extends {} = {}> = () => T;
export type WrapCurriedValue<T extends {}> = (
    props?: PropsWithChildren<T>,
    context?: any
) => ReactElement<any, any> | null;
