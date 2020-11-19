import React from 'react';
import { Type } from '../../../types';
import { StyledMessageIcon } from '../style';

export const defaultIconFromType = (type?: Type) => {
    //* On modern browsers, switch is actually as fast as a lookup table, kimda wierd
    switch (type) {
        case 'success':
            return <StyledMessageIcon name="checkCircle" type={type} />;
        case 'error':
            return <StyledMessageIcon name="error" type={type} />;
        case 'warning':
            return <StyledMessageIcon name="warning" type={type} />;
        // case 'primary':
        //     return <StyledMessageIcon name="info" type={type} />;
        // case 'default':
        //     return <StyledMessageIcon name="info" type={type} />;
        default:
            return <StyledMessageIcon name="info" type={type} />;
    }
};
