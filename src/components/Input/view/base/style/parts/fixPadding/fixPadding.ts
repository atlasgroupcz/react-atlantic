import { css } from 'styled-components';
import { StyledInput } from '../../Input.style';

type FixPaddingArgs = [boolean?, boolean?];
type FixPadding = (...args: FixPaddingArgs) => ReturnType<typeof css>;
export const fixPadding: FixPadding = (isPrefix, isSuffix) => {
    return css`
        ${StyledInput} {
            ${isPrefix &&
            css`
                padding-left: 30px;
            `}

            ${isSuffix &&
            css`
                padding-right: 30px;
            `}
        }
    `;
};
