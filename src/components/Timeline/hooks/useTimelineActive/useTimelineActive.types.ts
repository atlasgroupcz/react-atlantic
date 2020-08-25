import { TimelineItemProps } from '../../view/Item/Item.types';

export type UseTimelineActiveType = (
    props: UseTimelineActiveProps
) => UseTimelineActiveValue;

type UseTimelineActiveProps = TimelineItemProps;
type UseTimelineActiveValue = TimelineItemProps;
