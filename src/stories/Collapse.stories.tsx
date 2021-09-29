import { wrap } from '@atlasgroup/react-wrap';
import React, { useCallback } from 'react';
import {
    Collapse as CollapseView,
    CollapsePanel,
    CollapseProps,
    Text,
} from '..';
import { crossOut, disable, disableOnEvent } from './disableOnEvent';

const useCollapse = ({ onClick, ...props }: any) => {
    const [page, setPage] = React.useState<number | null>(1);
    const handleChange = useCallback(
        (tab) => {
            const value = tab === page ? null : tab;
            setPage(value);
        },
        [page]
    );

    return {
        activeUnique: page,
        onClick: handleChange,
        ...props,
    };
};

const Collapse = wrap(CollapseView, useCollapse);

export default {
    title: 'Collapse',
    component: CollapsePanel,
    argTypes: {
        isDisabled: {
            name: 'isDisabled',
            defaultValue: false,
        },
        activeUnique: crossOut,
        header: disable,
        unique: disable,
        ...disableOnEvent,
    },
};

export const Overview = ({
    isDisabled,
}: CollapseProps & { isDisabled: boolean }) => (
    <Collapse>
        <CollapsePanel
            header="CollapsePanel 1"
            unique="1"
            isDisabled={isDisabled}
        >
            <Text>Content 1</Text>
        </CollapsePanel>

        <CollapsePanel
            header="CollapsePanel 2"
            unique="2"
            isDisabled={isDisabled}
        >
            <Text>Content 2</Text>
        </CollapsePanel>

        <CollapsePanel
            header="CollapsePanel 3"
            unique="3"
            isDisabled={isDisabled}
        >
            <Text>Content 3</Text>
        </CollapsePanel>
    </Collapse>
);
