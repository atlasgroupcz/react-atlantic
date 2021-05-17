import { FC, PropsWithChildren } from 'react';

export type TimelineContextState = boolean;

export const defaultTimelineContextValue: TimelineContextState = false;

export type TimelineProviderProps = PropsWithChildren<{
    isOppositeContent: boolean;
}>;
export type TimelineProviderType = FC<TimelineProviderProps>;
