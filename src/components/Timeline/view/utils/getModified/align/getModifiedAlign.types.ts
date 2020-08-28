import { TimelineProps } from '../../../Timeline.types';
import { GetModifiedProps } from '../getModified.types';
import { HorizontalPosition } from '../../../../../../types';

export type GetModifiedAlign = (
    align: TimelineProps['align'],
    ...args: GetModifiedProps
) => HorizontalPosition;
