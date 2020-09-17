import React, { useState } from 'react';
import { Tabs } from '../view';
import { TabListDemo } from './List';

const NUMBER_OF_TABS = 5;
const MOCK_LIST = TabListDemo;

export const TabsFirst = () => {
    const [key, setKey] = useState<string>('1');

    const handleClick = (
        e: React.MouseEvent<Element, MouseEvent>,
        key: string
    ) => {
        setKey(key);
    };

    return (
        <Tabs List={MOCK_LIST} activeKey={key} onClick={handleClick}>
            {[...Array(NUMBER_OF_TABS)].map((_, index) => (
                <div>prdel {index}</div>
            ))}
        </Tabs>
    );
};
