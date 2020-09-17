import React from 'react';
import { Button } from '../../Button';
import { TabListType } from '../types';

const NUMBER_OF_TABS = 5;
export const TabListDemo: TabListType = ({ activeKey, onClick }) => {
    return (
        <>
            {[...Array(NUMBER_OF_TABS)].map((_, index) => (
                <Button
                    key={index}
                    isRound={activeKey === `${index}`}
                    onClick={(e) => onClick(e, `${index}`)}
                >
                    {index}
                </Button>
            ))}
        </>
    );
};
