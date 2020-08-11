import {
    FC,
    ReactNode,
    PropsWithChildren,
    ReactElement,
    ComponentProps,
} from 'react';

export type WrapCurried = <T extends {}>(
    View: FC<T>
) => (
    partialProps:
        | ComponentProps<typeof View>
        | WrapCurriedHookWithAny<ComponentProps<typeof View>>
        | WrapCurriedTuple<T>,
    children: ReactNode
) => WrapCurriedValue<Partial<T>>;

export type WrapCurriedTuple<T extends {} = {}> = [WrapCurriedHook<T>, T];

export type WrapCurriedHookWithAny<T extends {} = {}> = WrapCurriedHook<T> &
    any;
export type WrapCurriedHook<T extends {} = {}> = () => T;
export type WrapCurriedValue<T extends {}> = (
    props?: PropsWithChildren<T>,
    context?: any
) => ReactElement<any, any> | null;
