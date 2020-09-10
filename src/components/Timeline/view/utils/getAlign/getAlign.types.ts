import { TimelineItemProps } from '../../Item/Item.types';
import { TimelineProps } from '../../../types';

export type GetAlignTimeline = (
    align: TimelineProps['align'],
    i: number
) => TimelineItemProps['align'];
