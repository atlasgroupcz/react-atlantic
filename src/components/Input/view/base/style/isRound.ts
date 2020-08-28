import { css } from 'styled-components';
import { InputProps } from '../types';
import { ThemeType } from '../../../../../theme';

type IsRoundInput = (
    isRound: InputProps['isRound'],
    theme: ThemeType
) => ReturnType<typeof css> | null;

export const isRoundInput: IsRoundInput = (isRound, theme) =>
    isRound
        ? css`
              border-radius: ${theme.rounded};

              &:not(.disabled):not(.transparent) {
                  &:focus {
                      &:after {
                          border-radius: ${theme.rounded};
                      }
                  }
              }
          `
        : null;
