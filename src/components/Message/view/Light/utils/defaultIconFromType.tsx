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
                    isTransparent={isTransparent}
                />
            );
        case 'error':
            return (
                <StyledLightMessageIcon
                    name="error"
                    type={type}
                    isTransparent={isTransparent}
                />
            );
        case 'warning':
            return (
                <StyledLightMessageIcon
                    name="warning"
                    type={type}
                    isTransparent={isTransparent}
                />
            );
        case 'primary':
            return (
                <StyledLightMessageIcon
                    name="info"
                    type={type}
                    isTransparent={isTransparent}
                />
            );
        case 'info':
            return (
                <StyledLightMessageIcon
                    name="info"
                    type={type}
                    isTransparent={isTransparent}
                />
            );
        case 'default':
            return (
                <StyledLightMessageIcon
                    name="info"
                    type={type}
                    isTransparent={isTransparent}
                />
            );
        default:
            return (
                <StyledLightMessageIcon
                    name="info"
                    type={type}
                    isTransparent={isTransparent}
                />
            );
    }
};
