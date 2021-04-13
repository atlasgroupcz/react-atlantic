import styled from 'styled-components';
import {
    StyledStrongText,
    StyledText,
} from '../../../../../../../../../../../../Typography';

export const StyledDefaultRightHeaderLabelContainer = styled.div`
    display: flex;
    align-items: center;

    ${StyledText}, ${StyledStrongText} {
        margin: 0;
    }

    ${StyledText} {
        margin-right: ${({ theme }) => theme.margin.sm};
    }
`;
