import React, { forwardRef } from 'react';
import { styled } from '../../../../styled';
import { TimelineProps } from '../Timeline.types';

export const StyledTimelineContainer = styled(
    forwardRef<HTMLUListElement, TimelineProps>(
        ({ children, ...props }, ref) => (
            <ul {...props} ref={ref}>
                {children}
            </ul>
        )
    )
)`
    box-sizing: border-box;
    list-style-type: none;
    padding: 0;
    margin: 0;
`;
