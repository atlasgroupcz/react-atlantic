import { styled } from '../../../../styled';

export const StyledTimelineContainer = styled('ul')`
    position: relative;
    list-style-type: none;
    padding: 0;
    margin: 0;

    &:before {
        content: '';
        position: absolute;
        left: 7px;
        height: 100%;
        border-right: 1px solid ${(props) => props.theme.color.border};
    }
`;
