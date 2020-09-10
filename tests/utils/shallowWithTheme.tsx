import { shallow } from 'enzyme';
import { ThemeProvider } from '../../src/context/Theme';
import { ComponentProps, FC, ReactElement } from 'react';
import { theme } from '../../src/theme';

export const shallowWithTheme = <F extends FC<any>>(
    node: ReactElement<ComponentProps<F>>
) => {
    return shallow(node, {
        wrappingComponent: ThemeProvider,
        wrappingComponentProps: {
            theme: theme,
        },
    });
};
