import React, { ReactElement } from 'react';
import { TimelineItem } from './Item/Item';
import { StyledTimelineContainer } from './style/Timeline.style';
import { TimelineType } from './Timeline.types';
import { TimelineItemProps } from './Item/Item.types';
import { MouseEvents } from '../../..';

export const Timeline: TimelineType = ({ children, ...props }) => {
    return (
        <StyledTimelineContainer {...props}>
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
                return React.cloneElement(c, {
                    ...c.props,
                    onClick: childOnClick,
                });
            })}
        </StyledTimelineContainer>
    );
};

Timeline.displayName = 'Timeline';
Timeline.Item = TimelineItem;
