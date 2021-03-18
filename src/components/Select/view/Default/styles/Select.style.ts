import styled, { css } from 'styled-components';
import { getDefaultTypographyStyles } from '../../../../Typography/styles';
import { StyledIcon } from '../../../../Icon/view/styles';
import { SelectProps } from '../../../types';

type StyledDefaultSelectProps = Pick<
    SelectProps,
    'isOpen' | 'isFullWidth' | 'size'
>;

type StyledDefaultSelectValueProps = {
    isOptionSelected?: boolean;
} & StyledDefaultSelectProps;

export const StyledDefaultSelectListItem = styled.li<StyledDefaultSelectProps>`
    box-sizing: border-box;
    cursor: pointer;
    word-break: break-word;
    background: ${({ theme }) => theme.color.background.alpha};

    &:hover,
    &:nth-child(odd) {
        background: ${({ theme }) => theme.color.background.gamma};
    }

    &:last-child {
        border-radius: 0 0 ${({ theme }) => theme.radius}
            ${({ theme }) => theme.radius};
    }

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            line-height: 22px;
            padding: ${theme.padding.xs} ${theme.padding.sm};
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            line-height: 24px;
            padding: ${theme.padding.sm} ${theme.padding.md};
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            line-height: 30px;
            padding: ${theme.padding.sm} ${theme.padding.md};
        `}
`;

export const StyledDefaultSelectList = styled.ul`
    box-sizing: border-box;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    list-style-type: none;
    margin: 0;
    padding: 0;
    z-index: 100;
    border: 1px solid ${({ theme }) => theme.color.primary.alpha};
    border-top: none;
    border-radius: 0 0 ${({ theme }) => theme.radius}
        ${({ theme }) => theme.radius};
`;

export const StyledDefaultSelectIconContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    width: ${({ theme }) => theme.width.md};
    margin: 8px 0;
    font-size: 0;
    border-left: 1px solid ${({ theme }) => theme.color.border};

    ${StyledIcon} {
        color: ${({ theme }) => theme.color.text.beta};
    }
`;

export const StyledDefaultSelectValue = styled.div<
    StyledDefaultSelectValueProps
>`
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    padding: 0 ${({ theme }) => theme.padding.md};
    min-width: 0;

    ${({ theme, isOptionSelected }) =>
        isOptionSelected
            ? css`
                  color: ${theme.color.text.alpha};
              `
            : css`
                  color: ${theme.color.text.beta};
              `}
`;

export const StyledDefaultSelect = styled.div<StyledDefaultSelectProps>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius};
    cursor: pointer;

    height: ${({ theme }) => theme.height.md};

    &:hover {
        border-color: ${({ theme }) => theme.color.primary.alpha};
    }

    ${({ theme, size }) =>
        size === 'small' &&
        css`
            height: ${theme.height.sm};
        `}

    ${({ theme, size }) =>
        size === 'medium' &&
        css`
            height: ${theme.height.md};
        `}
    
    ${({ theme, size }) =>
        size === 'large' &&
        css`
            height: ${theme.height.lg};
        `}

    ${({ theme, isOpen }) =>
        isOpen
            ? css`
                  border-color: ${theme.color.primary.alpha};
                  border-bottom-color: ${theme.color.border};
                  border-radius: ${theme.radius} ${theme.radius} 0 0;
              `
            : css`
                  border-radius: ${theme.radius};
              `}
`;

export const StyledDefaultSelectContainer = styled.div<
    StyledDefaultSelectProps
>`
    ${(props) => getDefaultTypographyStyles(props)};
    box-sizing: border-box;
    position: relative;
    margin: 0;

    ${({ isFullWidth }) =>
        isFullWidth
            ? css`
                  width: 100%;
              `
            : css`
                  width: 220px;
              `}
`;
