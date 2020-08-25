import React, { forwardRef, ReactElement } from 'react';
import { StyledTimelineContainer } from './style/Timeline.style';
import { TimelineProps, TimelineType } from './Timeline.types';
import { TimelineItemProps } from './Item/Item.types';
import { MouseEvents } from '../../../types';

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
                        c?.props.align ?? getAlign(align, i);
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

type GetAlign = (
    align: TimelineProps['align'],
    i: number
) => TimelineItemProps['align'];
const getAlign: GetAlign = (align, i) => {
    if (align === 'alternate') {
        return i % 2 == 0 ? 'right' : 'left';
    }
    return 'left';
};
