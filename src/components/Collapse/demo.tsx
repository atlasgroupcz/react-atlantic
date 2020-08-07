import React, { FC, useState } from 'react';
import { Collapse } from '.';
import { Panel } from './Panel';
import { CollapseProviderProps } from './context';

export interface DemoProps {}
export type DemoType = FC<DemoProps>;

export const Demo: DemoType = () => {
    const [activeKeys, setActiveKeys] = useState<
        CollapseProviderProps['activeKey']
    >(1);

    console.log(activeKeys);

    return (
        <>
            <Collapse
                activeKey={activeKeys}
                setActiveKey={setActiveKeys}
                accordion
            >
                <Panel header="ahoj" unique="1">
                    <p>prdel 1</p>
                </Panel>
                <Panel header="ahoj" unique="2">
                    <p>prdel 2</p>
                </Panel>
                <Panel header="ahoj" unique="3">
                    <p>prdel 3</p>
                </Panel>
            </Collapse>
        </>
    );
};
