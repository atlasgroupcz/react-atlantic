import { css, styled } from '../../../../../styled';
import { SelectContainer, SelectInput, SelectList } from '../../../components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _ from 'styled-components/node_modules/@types/react';

export const StyledSelectMultiContainer = styled(SelectContainer)``;

export const StyledSelectMultiInput = styled(SelectInput)``;

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

export const StyledSelectMultiInputIcon = styled(SelectInput.Icon)``;

export const StyledSelectMultiList = styled(SelectList)``;

export const StyledSelectMultiListItem = styled(SelectList.Item)``;
