import styled, { css } from 'styled-components';
import { StyledTransformRightSideContainerProps } from '../types';

export const StyledTransformRightSideContainer = styled.div<
    StyledTransformRightSideContainerProps
>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    ${({ position }) =>
        ['left', 'right'].includes(position)
            ? css`
                  width: 50%;
              `
            : ``}

    ${({ position }) =>
        position === 'bottom'
            ? css`
                  width: 100%;
              `
            : ``}
`;
