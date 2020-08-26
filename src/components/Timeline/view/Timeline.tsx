import React, { forwardRef, ReactElement } from 'react';
import { StyledTimelineContainer } from './style';
import { TimelineType } from './Timeline.types';
import { MouseEvents } from '../../../types';
import { TimelineItemProps } from './Item/Item.types';
import { getAlign } from './utils/getAlign';

//TODO: change method onClick -> unique [VP]
export const Timeline: TimelineType = forwardRef(
    ({ children, align = 'right', ...props }, ref) => {
        return (
            <StyledTimelineContainer {...props} ref={ref}>
                {(React.Children.toArray(children) as ReactElement<
                    TimelineItemProps
                >[]).map((c, i) => {
                    const childOnClick: TimelineItemProps['onClick'] =
                        typeof c?.props?.onClick !== 'undefined'
                            ? (
                                  e: Parameters<
                                      NonNullable<
                                          MouseEvents<HTMLLIElement>['onClick']
                                      >
                                  >[0]
                              ) => c.props.onClick!(e, i)
                            : undefined;
                    const childAlign: TimelineItemProps['align'] =
                        c?.props?.align ?? getAlign(align, i);
                    return React.cloneElement(c, {
                        ...c.props,
                        onClick: childOnClick,
                        align: childAlign,
                    });
                })}
            </StyledTimelineContainer>
        );
    }
);

Timeline.displayName = 'Timeline';
