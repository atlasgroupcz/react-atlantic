import { css, styled } from '../../../../../styled';
import { SelectContainer, SelectInput, SelectList } from '../../../components';
import { Text } from '../../../../Typography';
import { PureButton } from '../../../../Button';
import { StyledIcon } from '../../../../Icon';

export const StyledSelectMultiContainer = styled(SelectContainer)`
    ${({ isFullWidth }) =>
        isFullWidth
            ? css`
                  width: 100%;
              `
            : css`
                  width: 280px;
              `}
`;

export const StyledSelectMultiInput = SelectInput;

export const StyledSelectMultiInputValue = styled(SelectInput.Value)`
    ${({ isOptionSelected }) =>
        !isOptionSelected
            ? css`
                  padding: 0 ${({ theme }) => theme.padding.md};
              `
            : css`
                  padding: 0 ${({ theme }) => theme.padding.xs};
              `}
`;

export const StyledSelectMultiInputHiddenItemsNumber = styled(Text)`
    color: ${({ theme }) => theme.color.primary.beta};
    margin-left: ${({ theme }) => theme.margin.md};
`;

export const StyledSelectMultiInputClearButton = styled(PureButton)`
    && {
        padding: 0;

        ${StyledIcon} {
            color: ${({ theme }) => theme.color.text.beta};
        }
    }
`;

export const StyledSelectMultiInputIcon = SelectInput.Icon;

export const StyledSelectMultiList = SelectList;

export const StyledSelectMultiListItem = styled(SelectList.Item)`
    ${StyledIcon} {
        margin-right: ${({ theme }) => theme.margin.sm};
        vertical-align: middle;
    }
`;
