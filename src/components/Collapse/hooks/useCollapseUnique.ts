import { useState, useCallback } from 'react';
import { CollapseProviderProps } from '../context';
import { CollapseProps } from '../types';
import { CollapseContextState } from '../context/types';
import { handleContextSet } from '../context/Context.utils';

export type UseCollapseUniqueProps = {
    defaultActiveUnique?: CollapseProviderProps['activeUnique'];
} & Pick<CollapseProviderProps, 'isAccordion'>;
export type UseCollapseUniqueValue = Pick<
    CollapseProps,
    'activeUnique' | 'onClick'
>;
export type UseCollapseUnique = (
    props: UseCollapseUniqueProps
) => UseCollapseUniqueValue;

export const useCollapseUnique: UseCollapseUnique = ({
    defaultActiveUnique,
    isAccordion,
}) => {
    const [activeUnique, setActiveUnique] = useState<
        CollapseProviderProps['activeUnique']
    >(getDefaultValue(isAccordion, defaultActiveUnique));

    const handleSetKey: CollapseContextState['onClick'] = useCallback(
        (key) =>
            handleContextSet({ key, isAccordion, setUnique: setActiveUnique }),
        [isAccordion]
    );

    return { activeUnique, onClick: handleSetKey };
};

type GetDefaultValue = (
    isAccordion: UseCollapseUniqueProps['isAccordion'],
    defaultValue: UseCollapseUniqueProps['defaultActiveUnique']
) => CollapseProviderProps['activeUnique'];

const getDefaultValue: GetDefaultValue = (isAccordion, defaultValue = []) => {
    if (Array.isArray(defaultValue)) {
        if (isAccordion) {
            return defaultValue[0] ?? ([] as string[] | number[]);
        } else {
            return defaultValue;
        }
    } else {
        if (isAccordion) {
            return defaultValue;
        } else {
            return [defaultValue] as string[] | number[];
        }
    }
};
