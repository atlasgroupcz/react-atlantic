import { FC } from 'react';

export type TimelineContextState = {
    isOppositeContent: boolean;
};

export const defaultTimelineContextValue: TimelineContextState = {
    isOppositeContent: false,
};

export type CollapseProviderType = FC<TimelineContextState>;
