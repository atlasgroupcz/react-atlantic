import React from 'react';
import { GetModifiedOnClick } from './getModifiedOnClick.types';

export const getModifiedOnClick: GetModifiedOnClick = (element, index) => {
    return typeof element?.props?.onClick !== 'undefined'
        ? (e: React.MouseEvent<HTMLElement, MouseEvent>) =>
              element.props.onClick(e, element.props?.unique ?? index)
        : undefined;
};
