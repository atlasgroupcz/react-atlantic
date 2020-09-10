import React, { MutableRefObject } from 'react';
import { TimelineProps } from '../../Timeline.types';
import { TimelineContextState } from '../../../context/types';

export type MapChild = (
    parentAlign: TimelineProps['align'],
    isOppositeContentRef: MutableRefObject<TimelineContextState>
) => (
    value: ReturnType<typeof React.Children.toArray>[number],
    index: number
) => ReturnType<typeof React.cloneElement> | null;
