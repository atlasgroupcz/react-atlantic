import { styled } from '../../../styled';

export const StyledPaginationContainer = styled.ul`
    user-select: none;

    display: inline-block;
    vertical-align: middle;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: inline-block;
        list-style: none;
        margin: 0 ${({ theme }) => theme.margin.xs};
    }

    && {
        > div,
        > span {
            display: inline-block;
            margin: 0 0 0 ${({ theme }) => theme.margin.md};
        }

        span + span {
            margin-left: ${({ theme }) => theme.margin.sm};
        }
    }
`;
