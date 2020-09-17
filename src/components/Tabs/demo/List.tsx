import React, { FC } from 'react';
import { Button } from '../../Button';
import { TabListProps } from '../types';
import { Badge } from '../../Badge';

const NUMBER_OF_TABS = 5;
export const TabListDemo: FC<TabListProps> = ({ activeKey, onClick }) => {
    return (
        <>
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
        </>
    );
};

type TabListDemoTwoProps = {
    newProp: string;
} & TabListProps;
export const TabListDemoTwo: FC<TabListDemoTwoProps> = ({
    activeKey,
    onClick,
    newProp = 'thisIsMyNewProp',
}) => {
    return (
        <>
            {[...Array(NUMBER_OF_TABS)].map((_, index) => (
                <span onClick={(e) => onClick(e, `${index}`)}>
                    <Badge
                        size={'small'}
                        key={index}
                        type={activeKey === `${index}` ? 'error' : 'primary'}
                    >
                        {`${newProp} ${index}`}
                    </Badge>
                </span>
            ))}
        </>
    );
};
