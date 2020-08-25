import { TimelineProps } from '../../Timeline.types';
import { TimelineItemProps } from '../../Item/Item.types';

export type GetAlignTimeline = (
    align: TimelineProps['align'],
    i: number
) => TimelineItemProps['align'];
