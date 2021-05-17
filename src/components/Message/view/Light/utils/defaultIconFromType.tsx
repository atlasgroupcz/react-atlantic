import React from 'react';
import { Type } from '../../../../../types';
import { StyledMessageLightIcon } from '../styles';

export const defaultIconFromType = (type?: Type, isTransparent?: boolean) => {
    //* On modern browsers, switch is actually as fast as a lookup table, kimda wierd
    switch (type) {
        case 'success':
            return (
                <StyledMessageLightIcon
                    name="checkCircle"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'error':
            return (
                <StyledMessageLightIcon
                    name="error"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'warning':
            return (
                <StyledMessageLightIcon
                    name="warning"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'primary':
            return (
                <StyledMessageLightIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'info':
            return (
                <StyledMessageLightIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        case 'default':
            return (
                <StyledMessageLightIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
        default:
            return (
                <StyledMessageLightIcon
                    name="info"
                    type={type}
                    isReversedColor={isTransparent}
                />
            );
    }
};
