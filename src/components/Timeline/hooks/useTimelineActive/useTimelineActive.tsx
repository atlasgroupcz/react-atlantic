import { UseTimelineActiveType } from './useTimelineActive.types';
import { useCallback, useState } from 'react';
import { TimelineItemProps } from '../../view/Item/Item.types';

/**
 * cannot use in wrap cause it will not work :]
 * */
export const useTimelineActive: UseTimelineActiveType = (props) => {
    const [state, setState] = useState<TimelineItemProps['unique'] | null>(
        null
    );

    const handleClick: TimelineItemProps['onClick'] = useCallback(
        (e, i) => {
            setState(i);
        },
        [setState]
    );

    return { ...props, onClick: handleClick };
};
