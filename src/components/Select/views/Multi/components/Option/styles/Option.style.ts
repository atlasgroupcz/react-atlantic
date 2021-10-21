import { css, styled } from '../../../../../../../styled';
import { Icon } from '../../../../../../Icon';
import { StyledText } from '../../../../../../Typography';
import { SelectMultiOptionProps } from '../../../../../types';
import { SELECT_OPTION_WIDTH } from '../../../../../utils';

type StyledSelectMultiOptionContainerProps = Pick<
    SelectMultiOptionProps,
    'size'
>;

export const StyledSelectMultiOptionValue = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.color.primary.beta};

    ${StyledText} {
        color: ${({ theme }) => theme.color.primary.beta};
    }
`;

export const StyledSelectMultiOptionIcon = styled(Icon)`
    width: 10px;
    height: 10px;
    margin-left: ${({ theme }) => theme.margin.md};
    transition: transform 300ms;

    && {
        color: ${({ theme }) => theme.color.text.beta};
    }
`;

export const StyledSelectMultiOptionContainer = styled.div<
    StyledSelectMultiOptionContainerProps
>`
    box-sizing: border-box;
    display: inline-flex;
    vertical-align: middle;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => `${theme.padding.xs} ${theme.padding.md}`};
    margin: ${({ theme }) => theme.margin.xs};
    border-radius: ${({ theme }) => theme.radius};
    background: ${({ theme }) => theme.color.primary.epsilon};
    max-width: ${SELECT_OPTION_WIDTH}px;

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            height: 20px;

            ${StyledText} {
                font-size: ${theme.font.size.sm};
            }
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            height: 28px;

            ${StyledText} {
                font-size: ${theme.font.size.md};
            }
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            height: 34px;

            ${StyledText} {
                font-size: ${theme.font.size.lg};
            }
        `}
`;
