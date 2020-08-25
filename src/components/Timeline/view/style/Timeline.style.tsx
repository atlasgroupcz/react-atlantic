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
    position: relative;
    list-style-type: none;
    padding: 0;
    margin: 0;

    &:before {
        content: '';
        position: absolute;
        left: 7px;
        height: 100%;
        border-right: 1px solid ${(props) => props.theme.color.border};
    }
`;
