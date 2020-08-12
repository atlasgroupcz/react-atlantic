import { UseCollapseUnique } from '..';
import { useState, useCallback } from 'react';
import { CollapseProviderProps } from '../../context';
import { CollapseContextState } from '../../context/types';
import {
    getDefaultUniqueCollapseValue,
    handleContextSet,
} from './useCollapseUnique.utils';

export const useCollapseUnique: UseCollapseUnique = ({
    defaultActiveUnique,
    isAccordion,
}) => {
    const [activeUnique, setActiveUnique] = useState<
        CollapseProviderProps['activeUnique']
    >(getDefaultUniqueCollapseValue(isAccordion, defaultActiveUnique));

    const handleSetKey: CollapseContextState['onClick'] = useCallback(
        (key) =>
            handleContextSet({ key, isAccordion, setUnique: setActiveUnique }),
        [isAccordion]
    );

    return { activeUnique, onClick: handleSetKey };
};
