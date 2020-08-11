import React from 'react';
import { Collapse } from '.';
import { useCollapseUnique } from './hooks';
import { wrapCurried } from '../../utils';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';

export const Demo = (): StoryFnReactReturnType => {
    const collapseUniqueState = useCollapseUnique({
        defaultActiveUnique: ['1', '2'],
        isAccordion: false,
    });

    // const firstDemo = wrap(
    //     Collapse,
    //     collapseUniqueState,
    //     <>
    //         <Collapse.Panel header="level1 - 1" unique="1">
    //             <p>prdel 1</p>
    //         </Collapse.Panel>
    //         <Collapse.Panel header="level1 - 2" unique="2">
    //             <p>prdel 2</p>
    //         </Collapse.Panel>
    //         <Collapse.Panel header="level1 - 3" unique="3">
    //             <p>prdel 3</p>
    //         </Collapse.Panel>
    //     </>
    // );

    const secondDemo = wrapCurried(Collapse)(
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
    );

    return secondDemo() as StoryFnReactReturnType;
};
