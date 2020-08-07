import React, { FC, useState } from 'react';
import { Collapse } from '.';
import { Panel } from './Panel';
import { CollapseProviderProps } from './context';

export interface DemoProps {}
export type DemoType = FC<DemoProps>;

//TODO!: create controller for collapse :]
export const Demo: DemoType = () => {
    const [activeKeys, setActiveKeys] = useState<
        CollapseProviderProps['activeKey']
    >([]);
    const [activeKeys2, setActiveKeys2] = useState<
        CollapseProviderProps['activeKey']
    >(2);

    const [activeKeys3, setActiveKeys3] = useState<
        CollapseProviderProps['activeKey']
    >(2);

    const level3 = (
        <>
            <Collapse
                activeKey={activeKeys}
                setActiveKey={setActiveKeys}
                accordion
            >
                <Panel header="level1 - 1" unique="1">
                    <p>prdel 1</p>
                </Panel>
                <Collapse
                    activeKey={activeKeys2}
                    setActiveKey={setActiveKeys2}
                    accordion
                >
                    <Panel header="level2 - 1" unique="1">
                        <p>prdel 1</p>
                    </Panel>
                    <Collapse
                        activeKey={activeKeys3}
                        setActiveKey={setActiveKeys3}
                        accordion
                    >
                        <Panel header="level3 - 1" unique="1">
                            <p>prdel 1</p>
                        </Panel>
                        <Panel header="level3 - 2" unique="2">
                            <p>prdel 2</p>
                        </Panel>
                        <Panel header="level3 - 3" unique="3">
                            <p>prdel 3</p>
                        </Panel>
                    </Collapse>
                    <Panel header="level2 - 2" unique="2">
                        <p>prdel 2</p>
                    </Panel>
                    <Panel header="level2 - 3" unique="3">
                        <p>prdel 3</p>
                    </Panel>
                </Collapse>
                <Panel header="level1 - 2" unique="2">
                    <p>prdel 2</p>
                </Panel>
                <Panel header="level1 - 3" unique="3">
                    <p>prdel 3</p>
                </Panel>
            </Collapse>
        </>
    );

    const level1 = (
        <>
            <Collapse activeKey={activeKeys} setActiveKey={setActiveKeys}>
                <Panel header="level1 - 1" unique="1">
                    <p>prdel 1</p>
                </Panel>
                <Panel header="level1 - 2" unique="2">
                    <p>prdel 2</p>
                </Panel>
                <Panel header="level1 - 3" unique="3">
                    <p>prdel 3</p>
                </Panel>
            </Collapse>
        </>
    );

    return <>{level1}</>;
};
