import React, { useState } from 'react';
import { Button } from '../../Button';
import { Tabs } from '../view';
import { TabListDemo, TabListDemoTwo } from './List';

const NUMBER_OF_TABS = 5;

export const TabsFirst = () => {
    const [key, setKey] = useState<string>('1');

    const handleClick = (
        _: React.MouseEvent<Element, MouseEvent>,
        key: string
    ) => {
        setKey(key);
    };

    return (
        <>
            <Tabs List={TabListDemo} activeKey={key} onClick={handleClick}>
                {[...Array(NUMBER_OF_TABS)].map((_, index) => (
                    <div key={index}>prdel {index}</div>
                ))}
            </Tabs>

            <br />

            <Tabs List={TabListDemoTwo} activeKey={key} onClick={handleClick}>
                {[...Array(NUMBER_OF_TABS)].map((_, index) => (
                    <div key={index}>prdel {index}</div>
                ))}
            </Tabs>

            <br />

            <Tabs
                List={({ onClick, activeKey }) => {
                    return (
                        <ol>
                            <Button
                                type={activeKey === '1' ? 'success' : 'error'}
                                onClick={(e) => onClick(e, '1')}
                            >
                                prdel 1
                            </Button>
                            <Button
                                type={activeKey === '2' ? 'success' : 'error'}
                                onClick={(e) => onClick(e, '2')}
                            >
                                prdel 2
                            </Button>
                        </ol>
                    );
                }}
                activeKey={key}
                onClick={handleClick}
            >
                {[...Array(NUMBER_OF_TABS)].map((_, index) => (
                    <div key={index}>prdel {index}</div>
                ))}
            </Tabs>
        </>
    );
};
