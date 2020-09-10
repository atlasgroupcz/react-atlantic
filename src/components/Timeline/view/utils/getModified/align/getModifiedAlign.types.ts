import { GetModifiedProps } from '../getModified.types';
import { HorizontalPosition } from '../../../../../../types';
import { TimelineProps } from '../../../../types';

export type GetModifiedAlign = (
    align: TimelineProps['align'],
    ...args: GetModifiedProps
) => HorizontalPosition;
