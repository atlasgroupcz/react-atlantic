import React, { FC } from 'react';
import { Badge, Button, TabListProps } from '../../../src';

const NUMBER_OF_TABS = 5;
export const TabListDemo: FC<TabListProps> = ({
    activeKey,
    onClick,
    ...props
}) => {
    return (
        <div {...props}>
            {[...Array(NUMBER_OF_TABS)].map((_, index) => (
                <Button
                    isDisabled={activeKey === `${index}`}
                    key={index}
                    isRound={activeKey === `${index}`}
                    onClick={(e) => onClick(e, `${index}`)}
                >
                    {index}
                </Button>
            ))}
        </div>
    );
};

type TabListDemoTwoProps = {
    newProp: string;
    n?: number;
} & TabListProps;
export const TabListDemoTwo: FC<TabListDemoTwoProps> = ({
    activeKey,
    onClick,
    newProp = 'thisIsMyNewProp',
    n = NUMBER_OF_TABS,
}) => {
    return (
        <>
            {[...Array(n)].map((_, index) => (
                <span onClick={(e) => onClick(e, `${index}`)} key={index}>
                    <Badge
                        size={'small'}
                        type={activeKey === `${index}` ? 'error' : 'primary'}
                    >
                        {`TabHeader-${index}`}
                    </Badge>
                </span>
            ))}
        </>
    );
};
