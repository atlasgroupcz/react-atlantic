import { InputProps } from '../../../types';
import { css } from 'styled-components';

type IsFullWidthMixin = (
    value: InputProps['isFullWidth']
) => ReturnType<typeof css>;
export const isFullWidthMixin: IsFullWidthMixin = (value) => {
    return value
        ? css`
              width: 100%;
          `
        : css``;
};
