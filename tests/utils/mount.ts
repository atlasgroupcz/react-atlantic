import { mount as enzymeMount, MountRendererProps } from 'enzyme';
import { FC, ComponentProps, ReactElement, Component } from 'react';

export const mount = <F extends FC<any>>(
    node: ReactElement<ComponentProps<F>>,
    options?: MountRendererProps
) => enzymeMount<Component<ComponentProps<F>, any, F>>(node, options);
