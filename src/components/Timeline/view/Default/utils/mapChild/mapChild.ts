import React, { ReactElement } from 'react';
import { TimelineItemProps } from '../../components/Item/types/Item.types';
import { getModifiedOnClick } from '../getModified/onClick';
import { getModifiedAlign } from '../getModified/align';
import { MapChild } from './mapChild.types';

export const mapChild: MapChild = (parentAlign, isOppositeContentRef) => (
    value,
    index
) => {
    if (React.isValidElement(value)) {
        const assumed = value as ReactElement<TimelineItemProps>;

        if (!isOppositeContentRef.current && !!assumed.props.oppositeContent) {
            isOppositeContentRef.current = true;
        }

        const modifiedOnClick = getModifiedOnClick(assumed, index);
        const modifiedAlign = getModifiedAlign(parentAlign, assumed, index);

        return React.cloneElement(assumed, {
            ...assumed.props,
            onClick: modifiedOnClick,
            align: modifiedAlign,
        });
    }
    return null;
};
