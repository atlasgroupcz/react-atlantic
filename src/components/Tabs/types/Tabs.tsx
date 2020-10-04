import { Dispatch, SetStateAction } from 'react';
import { ActiveIdType } from './ActiveIdType';

export type TabsContextStateType = {
    activeId: ActiveIdType;
    setActiveId: Dispatch<SetStateAction<TabsContextStateType['activeId']>>;
};
