import React, { FC, ReactNode } from 'react';
import { Collapse, CollapseType } from '.';
import { useCollapseUnique } from './hooks';
import { wrap } from '../../utils';

export interface DemoProps {}
export type DemoType = FC<DemoProps>;

//TODO!: create controller for collapse :], onChange
export const Demo: DemoType = () => {
    const collapseUniqueState = useCollapseUnique({
        defaultActiveUnique: ['1', '2'],
        isAccordion: false,
    });

    const level1 = (
        <>
            {wrap(
                Collapse,
                collapseUniqueState,
                <>
                    <Collapse.Panel header="level1 - 1" unique="1">
                        <p>prdel 1</p>
                    </Collapse.Panel>
                    <Collapse.Panel header="level1 - 2" unique="2">
                        <p>prdel 2</p>
                    </Collapse.Panel>
                    <Collapse.Panel header="level1 - 3" unique="3">
                        <p>prdel 3</p>
                    </Collapse.Panel>
                </>
            )}
        </>
    );

    return <>{level1}</>;
};
