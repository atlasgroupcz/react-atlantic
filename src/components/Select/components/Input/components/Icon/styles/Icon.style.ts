import { css, styled } from '../../../../../../../styled';
import { StyledIcon } from '../../../../../../Icon';
import { StyledSelectProps } from '../../../../../types';

type StyledSelectInputIconContainerProps = Pick<StyledSelectProps, 'size'>;

export const StyledSelectInputIconContainer = styled.div<
    StyledSelectInputIconContainerProps
>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    width: ${({ theme }) => theme.width.md};
    font-size: 0;
    border-left: 1px solid ${({ theme }) => theme.color.border};

    ${StyledIcon} {
        color: ${({ theme }) => theme.color.text.beta};
    }

    ${({ size }) =>
        size &&
        css`
            ${size === 'small' &&
            css`
                margin-top: 5px;
                margin-bottom: 5px;
            `}

            ${size === 'medium' &&
            css`
                margin-top: 8px;
                margin-bottom: 8px;
            `}
        
        ${size === 'large' &&
            css`
                margin-top: 10px;
                margin-bottom: 10px;
            `}
        `}
`;
