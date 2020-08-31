import { css } from 'styled-components';
import { InputProps } from '../../../types';
import { Size } from '../../../../../../../types';

type SizeInput = (size: InputProps['size']) => ReturnType<typeof css>;

const sizeObj: Record<Size, number> = {
    large: 220,
    medium: 200,
    small: 180,
};

export const sizeInput: SizeInput = (size) => {
    const tranformedSize = size || 'medium';
    return css`
        width: ${sizeObj[tranformedSize]}px;
    `;
};
