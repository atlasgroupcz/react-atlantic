import styled from 'styled-components';
import { StyledButton } from '../../../../Button/view/default/styles';

export const StyledTransferFooterContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: ${({ theme }) => theme.padding.sm}
        ${({ theme }) => theme.padding.md};
    border-top: 1px solid ${({ theme }) => theme.color.border};

    ${StyledButton} {
        margin-right: ${({ theme }) => theme.margin.md};

        &:last-child {
            margin-right: 0;
        }
    }
`;
