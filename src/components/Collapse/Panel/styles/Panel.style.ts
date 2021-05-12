import { styled } from '../../../../styled';
import { StyledIcon } from '../../../Icon';
import { StyledCollapseIconContainer } from '../../styles';

export const StyledPanel = styled.li`
    list-style-type: none;
`;

export const StyledPanelContent = styled.div``;
export const StyledPanelHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    &:hover {
        ${StyledCollapseIconContainer} {
            ${StyledIcon} {
                color: ${({ theme }) => theme.color.primary.alpha};
            }
        }
    }
`;
