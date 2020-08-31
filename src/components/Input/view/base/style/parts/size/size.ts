import { css } from 'styled-components';
import { InputProps } from '../../../types';

type SizeInput = (size: InputProps['size']) => ReturnType<typeof css>;

export const sizeInput: SizeInput = (size) => {
    switch (size) {
        case 'large':
            return sizeLarge();
        case 'small':
            return sizeSmall();
        default:
            return sizeMedium();
    }
};

type SpecificSizeInput = () => ReturnType<typeof css>;
const sizeLarge: SpecificSizeInput = () => css`
    width: 220px;
`;
const sizeSmall: SpecificSizeInput = () => css`
    width: 180px;
`;
const sizeMedium: SpecificSizeInput = () => css`
    width: 200px;
`;
