import React from 'react';
import { createContext, useContext } from 'react';
import {
    CollapseProviderType,
    defaultTimelineContextValue,
    TimelineContextState,
} from './types';

export const TimelineProvider: CollapseProviderType = ({
    children,
    isOppositeContent,
}) => {
    return (
        <TimelineContext.Provider
            value={{
                isOppositeContent,
            }}
        >
            {children}
        </TimelineContext.Provider>
    );
};

const TimelineContext = createContext<TimelineContextState>(
    defaultTimelineContextValue
);

export const useTimelineContext = () =>
    useContext<TimelineContextState>(TimelineContext);
