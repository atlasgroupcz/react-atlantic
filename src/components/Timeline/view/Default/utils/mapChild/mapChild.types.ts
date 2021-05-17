import React, { MutableRefObject } from 'react';
import { TimelineContextState } from '../../../../context/types/Context.type';
import { TimelineProps } from '../../../../types';

export type MapChild = (
    parentAlign: TimelineProps['align'],
    isOppositeContentRef: MutableRefObject<TimelineContextState>
) => (
    value: ReturnType<typeof React.Children.toArray>[number],
    index: number
) => ReturnType<typeof React.cloneElement> | null;
