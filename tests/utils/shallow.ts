import { shallow as enzymeShallow, ShallowRendererProps } from 'enzyme';
import { FC, ComponentProps, ReactElement, Component } from 'react';

export const shallow = <F extends FC<any>>(
    node: ReactElement<ComponentProps<F>>,
    options?: ShallowRendererProps
) => enzymeShallow<Component<ComponentProps<F>, any, F>>(node, options);
