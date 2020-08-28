import { InputProps } from '../types';
import { css } from 'styled-components';

type IsFullWidthMixin = (
    value: InputProps['isFullWidth']
) => ReturnType<typeof css> | null;
export const isFullWidthMixin: IsFullWidthMixin = (value) => {
    return value
        ? css`
              width: 100%;
          `
        : null;
};
