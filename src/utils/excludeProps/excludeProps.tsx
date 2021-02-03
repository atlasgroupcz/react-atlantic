import { ComponentPropsWithoutRef, createElement, FC, memo } from 'react';
import { removeProperties } from '../removeProperties';

export const excludeProps = <R extends {}>() => <
    T extends keyof JSX.IntrinsicElements | FC<any>,
    E extends ReadonlyArray<keyof R>,
    As extends keyof JSX.IntrinsicElements | FC<any> | undefined
>(
    element: T,
    excludeArr: E
): FC<ComponentPropsWithoutRef<T> & R & { as?: As }> =>
    memo(({ children, as, ...props }) => {
        return createElement(
            as ?? element,
            removeProperties(props, excludeArr as any),
            children
        );
    });
