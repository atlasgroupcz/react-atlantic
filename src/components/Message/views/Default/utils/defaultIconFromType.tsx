import React from 'react';
import { Type } from '../../../../../types';
import { StyledMessageIcon } from '../styles';

export const defaultIconFromType = (type?: Type, isTransparent?: boolean) => {
    //* On modern browsers, switch is actually as fast as a lookup table, kimda wierd
    switch (type) {
        case 'success':
            return (
                <StyledMessageIcon
                    name="checkCircle"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'error':
            return (
                <StyledMessageIcon
                    name="error"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'warning':
            return (
                <StyledMessageIcon
                    name="warning"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'primary':
            return (
                <StyledMessageIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'info':
            return (
                <StyledMessageIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'default':
            return (
                <StyledMessageIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        default:
            return (
                <StyledMessageIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
    }
};
