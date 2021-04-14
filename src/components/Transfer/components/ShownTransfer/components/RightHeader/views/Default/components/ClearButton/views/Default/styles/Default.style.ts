import styled from 'styled-components';
import { StyledLink } from '../../../../../../../../../../../../Typography/Link';
import { PureButton } from '../../../../../../../../../../../../Button';

export const StyledTransformDefaultClearButton = styled(StyledLink).attrs({
    as: PureButton,
})`
    margin: 0;
    color: ${({ theme }) => theme.color.error.alpha};
`;
