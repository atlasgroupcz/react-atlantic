import { css } from 'styled-components';
import { InputProps } from '../types';
import { ThemeType } from '../../../../../theme';

type SizeDiffInput = (
    size: InputProps['size'],
    theme: ThemeType
) => ReturnType<typeof css>;

export const sizeDiffInput: SizeDiffInput = (size, theme) => {
    switch (size) {
        case 'large':
            return sizeDiffLarge(theme);
        case 'small':
            return sizeDiffSmall(theme);
        default:
            return sizeDiffMedium(theme);
    }
};

type SpecificSizeDiffInput = (theme: ThemeType) => ReturnType<typeof css>;
const sizeDiffLarge: SpecificSizeDiffInput = (theme) => css`
    height: ${theme.height.lg};
    font-size: ${theme.font.size.lg};

    i + span,
    span + i {
        margin-left: ${theme.margin.lg};
    }
`;
const sizeDiffSmall: SpecificSizeDiffInput = (theme) => css`
    height: ${theme.height.sm};
    font-size: 12px;

    i + span,
    span + i {
        margin-left: ${theme.margin.sm};
    }
`;
const sizeDiffMedium: SpecificSizeDiffInput = (theme) => css`
    height: ${(props) => props.theme.height.md};
    font-size: ${(props) => props.theme.font.size.md};
`;
