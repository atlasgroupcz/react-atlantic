import React from 'react';
import { Type } from '../../../../../types';
import { StyledLightMessageIcon } from '../styles';

export const defaultIconFromType = (type?: Type, isTransparent?: boolean) => {
    //* On modern browsers, switch is actually as fast as a lookup table, kimda wierd
    switch (type) {
        case 'success':
            return (
                <StyledLightMessageIcon
                    name="checkCircle"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'error':
            return (
                <StyledLightMessageIcon
                    name="error"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'warning':
            return (
                <StyledLightMessageIcon
                    name="warning"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'primary':
            return (
                <StyledLightMessageIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'info':
            return (
                <StyledLightMessageIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'default':
            return (
                <StyledLightMessageIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        default:
            return (
                <StyledLightMessageIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
    }
};
