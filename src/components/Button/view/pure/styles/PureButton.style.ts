import styled from 'styled-components';
import { Button } from '../../default';

export const StyledPureButton = styled(Button)`
    background: none;
    border: none;
    box-shadow: none;

    &:after {
        display: none;
    }

    &:hover {
        background: none;
    }
`;
