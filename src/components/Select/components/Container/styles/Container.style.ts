import { StyledSelectProps } from '../../../types';
import { css, styled } from '../../../../../styled';
import { getTypographyDefaultStyles } from '../../../../Typography';

type StyledSelectContainerProps = Pick<StyledSelectProps, 'isFullWidth'>;

export const StyledSelectContainer = styled.div<StyledSelectContainerProps>`
    ${getTypographyDefaultStyles()};
    box-sizing: border-box;
    position: relative;
    margin: 0;

    ${({ isFullWidth }) =>
        isFullWidth
            ? css`
                  width: 100%;
              `
            : css`
                  width: 220px;
              `}
`;
