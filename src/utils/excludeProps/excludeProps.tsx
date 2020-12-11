import React, {
    ComponentPropsWithoutRef,
    createElement,
    FC,
    memo,
} from 'react';
import { removeProperties } from '../removeProperties';

export const excludeComponentProps = <R extends {} = {}>() => <
    T extends FC<any>,
    E extends ReadonlyArray<keyof ComponentPropsWithoutRef<T> | keyof R>
>(
    Component: T,
    excludeArr: E
): FC<ComponentPropsWithoutRef<T> & R> =>
    memo(({ children, ...props }) => {
        const AnyComponent = Component as any;
        return (
            <AnyComponent {...removeProperties(props, excludeArr as any)}>
                {children}
            </AnyComponent>
        );
    });

export const excludeIntrinsicElementProps = <R extends {} = {}>() => <
    T extends keyof JSX.IntrinsicElements,
    A extends FC<any>,
    E extends ReadonlyArray<keyof JSX.IntrinsicElements[T] | keyof R>
>(
    element: T,
    excludeArr: E
): FC<
    ComponentPropsWithoutRef<T> & R & { as?: keyof JSX.IntrinsicElements | A }
> =>
    memo(({ children, as, ...props }) => {
        return createElement(
            as ?? element,
            removeProperties(props, excludeArr as any),
            children
        );
    });
