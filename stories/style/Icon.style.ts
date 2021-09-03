import { styled } from '../../src/styled';
import { StyledText } from '../../src/components/Typography/Text/styles';
import { StyledIcon } from '../../lib';

export const StyledIconImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.padding.xl};

    ${StyledIcon} {
        width: 24px;
        height: 24px;
    }
`;

export const StyledIconName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.padding.md};
    border-top: 1px solid ${({ theme }) => theme.color.border};

    ${StyledText} {
        margin: 0;
        color: ${({ theme }) => theme.color.text.beta};
    }
`;

export const StyledIconContainer = styled.div`
    border-radius: ${({ theme }) => theme.radius};
    border: 1px solid ${({ theme }) => theme.color.border};
`;

export const StyledIconsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: ${({ theme }) => theme.margin.xl};
`;
