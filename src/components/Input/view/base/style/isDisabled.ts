import { css } from 'styled-components';
import { InputProps } from '../types';
import { ThemeType } from '../../../../../theme';

type IsDisabledInput = (
    isRound: InputProps['isDisabled'],
    theme: ThemeType
) => ReturnType<typeof css> | null;

export const isDisabledInput: IsDisabledInput = (isDisabled, theme) =>
    isDisabled
        ? css`
              color: ${theme.color.text.beta};
              ::placeholder {
                  color: ${theme.color.text.beta};
              }

              background-color: ${theme.color.default};
              cursor: not-allowed;
              outline: 0;

              &:hover,
              &:focus {
                  outline: 0;
                  box-shadow: none;
                  border: 1px solid ${theme.color.border};
              }
          `
        : null;
