import { CSSProperties } from 'styled-components';
import { TestComponentProps } from '../types/TestComponentProps';
import { topLeft } from '../style/topLeft';
import { topRight } from '../style/topRight';
import { bottomLeft } from '../style/bottomLeft';
import { bottomRight } from '../style/bottomRight';

export const resolveStyle = (
    position: TestComponentProps['position']
): CSSProperties => {
    switch (position) {
        case 'top-left':
            return topLeft;
        case 'top-right':
            return topRight;
        case 'bottom-left':
            return bottomLeft;
        case 'bottom-right':
            return bottomRight;
    }
};
