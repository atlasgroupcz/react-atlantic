import styled from 'styled-components';
import { PureButton } from '../pure';

export const SimpleButton = styled(PureButton)`
    && {
        :hover {
            background: ${props.theme.color.background.alpha};
        }
    }
`;
