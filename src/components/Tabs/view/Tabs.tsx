import React, { FC } from 'react';
import { TabsProvider } from '../context';
import { ActiveIdType } from '../types/ActiveIdType';

export interface TabsProps {
    initialActiveId: ActiveIdType;
    TabsController: FC<any>;
}
export type TabsType = FC<TabsProps>;

/**
 * A `Tabs` component, `Tabs` use context to determine which tab is open
 *
 * `TabsController` prop has access to this context (`useTabs` hook) and should be used to modify the Tabs state
 *
 * Context can also be accessed from inside Tabs, if there is a need to modify state from elsewhere
 *
 * React Atlantic also provides a `Tab` component which conditionally renders its children based on the `Tabs` state
 */
export const Tabs: TabsType = ({
    TabsController,
    initialActiveId,
    children,
}) => {
    return (
        <TabsProvider initialActiveId={initialActiveId}>
            <TabsController />
            {children}
        </TabsProvider>
    );
};
