import React from 'react';
import { createContext, useContext } from 'react';
import {
    TimelineProviderType,
    defaultTimelineContextValue,
    TimelineContextState,
} from './types';

export const TimelineProvider: TimelineProviderType = ({
    children,
    isOppositeContent,
}) => {
    return (
        <TimelineContext.Provider value={isOppositeContent}>
            {children}
        </TimelineContext.Provider>
    );
};

const TimelineContext = createContext<TimelineContextState>(
    defaultTimelineContextValue
);

export const useTimelineContext = () =>
    useContext<TimelineContextState>(TimelineContext);
