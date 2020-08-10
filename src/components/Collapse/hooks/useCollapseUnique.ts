import { useState } from 'react';
import { CollapseProviderProps } from '../context';
import { CollapseProps } from '../types';

type UseCollapseProps = {};
type UseCollapseValue = CollapseProps;
type UseCollapseUnique = (props: UseCollapseProps) => UseCollapseValue;
export const useCollapseUnique: UseCollapseUnique = ({}) => {
    const [activeUnique, setActiveUnique] = useState<
        CollapseProviderProps['activeUnique']
    >([]);

    return { activeUnique, setUniqueKey: setActiveUnique };
};
