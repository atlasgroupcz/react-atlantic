import React, { FC, MouseEvent, useCallback } from 'react';
import { TabListProps, Tabs } from '..';
import { disableOnEvent } from './disableOnEvent';

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {
        ...disableOnEvent,
    },
};

const Tab: FC<TabListProps> = ({ onClick, id, activeKey }) => {
    const handleClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            onClick(e, id!);
        },
        [id, onClick]
    );

    return <div id={id} onClick={handleClick}></div>;
};

export const Overview = () => (
    <Tabs List={Tab} activeKey="1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
    </Tabs>
);
