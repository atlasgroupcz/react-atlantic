import React from 'react';
import { Type } from '../../../../../types';
import { Icon } from '../../../../Icon';

export const defaultIconFromType = (type?: Type) => {
    switch (type) {
        case 'success':
            return <Icon name="checkCircle" />;
        case 'error':
            return <Icon name="error" />;
        case 'warning':
            return <Icon name="warning" />;
        case 'primary':
            return <Icon name="info" />;
        case 'info':
            return <Icon name="info" />;
        case 'default':
            return <Icon name="info" />;
        default:
            return <Icon name="info" />;
    }
};
