import { styled } from '../../../../../styled';

export const StyledPagination = styled.ul`
    user-select: none;

    display: inline-block;
    vertical-align: middle;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: inline-block;
        list-style: none;
        margin: 0 ${(props) => props.theme.margin.xs};
    }

    && {
        > div,
        > span {
            display: inline-block;
            margin: 0 0 0 ${(props) => props.theme.margin.md};
        }

        span + span {
            margin-left: ${(props) => props.theme.margin.sm};
        }
    }
`;
