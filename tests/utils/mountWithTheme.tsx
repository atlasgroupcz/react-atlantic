import { mount } from 'enzyme';
import { ThemeProvider } from '../../src/context/Theme';
import { ComponentProps, FC, ReactElement } from 'react';
import { theme } from '../../src/theme';

export const mountWithTheme = <F extends FC<any>>(
    node: ReactElement<ComponentProps<F>>
) => {
    return mount(node, {
        wrappingComponent: ThemeProvider,
        wrappingComponentProps: {
            theme,
        },
    });
};
