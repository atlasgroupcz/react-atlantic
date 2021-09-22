import styled from 'styled-components';

export const StoriesComponentContainer = styled.div`
    border-radius: ${({ theme }) => theme.radius};
    margin-top: ${({ theme }) => theme.margin.md};
    margin-bottom: ${({ theme }) => theme.margin.md};
    padding: ${({ theme }) => theme.padding.md};
    * {
        margin-left: ${({ theme }) => theme.margin.md};
        margin-right: ${({ theme }) => theme.margin.md};
    }
`;
