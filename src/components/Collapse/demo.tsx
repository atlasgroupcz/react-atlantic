import React, { FC } from 'react';
import { Collapse } from '.';
import { useCollapseUnique } from './hooks';

export interface DemoProps {}
export type DemoType = FC<DemoProps>;

//TODO!: create controller for collapse :], onChange
export const Demo: DemoType = () => {
    const collapseUniqueState = useCollapseUnique({
        defaultActiveUnique: ['1', '2'],
        isAccordion: true,
    });

    const level1 = (
        <>
            <Collapse {...collapseUniqueState} expandIconPosition={'left'}>
                <Collapse.Panel header="level1 - 1" unique="1">
                    <p>prdel 1</p>
                </Collapse.Panel>
                <Collapse.Panel header="level1 - 2" unique="2">
                    <p>prdel 2</p>
                </Collapse.Panel>
                <Collapse.Panel header="level1 - 3" unique="3">
                    <p>prdel 3</p>
                </Collapse.Panel>
            </Collapse>
        </>
    );

    return <>{level1}</>;
};
