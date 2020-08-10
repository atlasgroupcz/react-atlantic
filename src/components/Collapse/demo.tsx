import React, { FC, useState } from 'react';
import { Collapse } from '.';
import { CollapseProviderProps } from './context';

export interface DemoProps {}
export type DemoType = FC<DemoProps>;

//TODO!: create controller for collapse :], onChange
export const Demo: DemoType = () => {
    const [activeKeys, setActiveKeys] = useState<
        CollapseProviderProps['activeUnique']
    >([]);
    const [activeKeys2, setActiveKeys2] = useState<
        CollapseProviderProps['activeUnique']
    >(2);

    const [activeKeys3, setActiveKeys3] = useState<
        CollapseProviderProps['activeUnique']
    >(2);

    const level3 = (
        <>
            <Collapse
                activeUnique={activeKeys}
                setActiveKey={setActiveKeys}
                isAccordion
                expandIconPosition={'right'}
            >
                <Collapse.Panel header="level1 - 1" unique="1">
                    <p>prdel 1</p>
                </Collapse.Panel>
                <Collapse
                    activeUnique={activeKeys2}
                    setActiveKey={setActiveKeys2}
                    isAccordion
                >
                    <Collapse.Panel header="level2 - 1" unique="1">
                        <p>prdel 1</p>
                    </Collapse.Panel>
                    <Collapse
                        activeUnique={activeKeys3}
                        setActiveKey={setActiveKeys3}
                        isAccordion
                    >
                        <Collapse.Panel header="level3 - 1" unique="1">
                            <p>prdel 1</p>
                        </Collapse.Panel>
                        <Collapse.Panel header="level3 - 2" unique="2">
                            <p>prdel 2</p>
                        </Collapse.Panel>
                        <Collapse.Panel header="level3 - 3" unique="3">
                            <p>prdel 3</p>
                        </Collapse.Panel>
                    </Collapse>
                    <Collapse.Panel header="level2 - 2" unique="2">
                        <p>prdel 2</p>
                    </Collapse.Panel>
                    <Collapse.Panel header="level2 - 3" unique="3">
                        <p>prdel 3</p>
                    </Collapse.Panel>
                </Collapse>
                <Collapse.Panel header="level1 - 2" unique="2">
                    <p>prdel 2</p>
                </Collapse.Panel>
                <Collapse.Panel header="level1 - 3" unique="3">
                    <p>prdel 3</p>
                </Collapse.Panel>
            </Collapse>
        </>
    );

    const level1 = (
        <>
            <Collapse
                activeUnique={activeKeys}
                setActiveKey={setActiveKeys}
                expandIconPosition={'left'}
            >
                <Collapse.Panel isDisabled header="level1 - 1" unique="1">
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
