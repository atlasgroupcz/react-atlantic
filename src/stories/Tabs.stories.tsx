import React, { FC, MouseEvent, useCallback } from 'react';
import { TabListProps, Tabs } from '..';
import { crossOut, disableOnEvent } from './disableOnEvent';

export default {
    title: 'Tabs',
    component: Tabs,
    argTypes: {
        List: crossOut,
        activeKey: crossOut,
        ...disableOnEvent,
    },
};

const Tab: FC<TabListProps> = ({ onClick, id }) => {
    const handleClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            onClick(e, id!);
        },
        [id, onClick]
    );

    return <div id={id} onClick={handleClick}></div>;
};

export const Overview = () => (
    <Tabs List={Tab} activeKey="x">
        <div key="a">1</div>
        <div key="b">2</div>
        <div key="c">3</div>
        <div key="x">4</div>
        <div key="z">5</div>
    </Tabs>
);
