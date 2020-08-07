import { CollapseProviderProps } from '.';
import { CollapseContextState } from './types';
import { isActiveKey } from '../Panel/utils';
import { ReactText } from 'react';

export const handleContextSet: HandleContextSet = ({ accordion, ...args }) => {
    if (accordion) {
        handleAccordionSet({ ...args });
    } else {
        handleNotAccordionSet({ ...args });
    }
};

const handleAccordionSet: HandleAccordionSet = ({ key, setActiveKey }) => {
    setActiveKey((prevState) => {
        return isActiveKey(key, prevState) ? [] : key;
    });
};

const handleNotAccordionSet: HandleNotAccordionSet = ({
    setActiveKey,
    key,
}) => {
    setActiveKey((prevState) => {
        if (Array.isArray(prevState)) {
            const newArray: string[] | number[] = [...prevState] as
                | string[]
                | number[];

            const index = newArray.findIndex((item: string | number) => {
                return item.toString() === key.toString();
            });

            if (index === -1) {
                return [...newArray, key] as string[] | number[];
            } else {
                newArray.splice(index, 1);
                return [...newArray] as string[] | number[];
            }
        } else {
            return [key] as string[] | number[];
        }
    });
};

type HandleAccordionSet = (args: HandleWithoutAccordionArgs) => void;
type HandleNotAccordionSet = (args: HandleWithoutAccordionArgs) => void;
export type HandleContextSet = (args: HandleContextSetArgs) => void;
export type HandleContextSetArgs = Omit<CollapseProviderProps, 'activeKey'> & {
    key: Parameters<CollapseContextState['setActiveKey']>[0];
};
type HandleWithoutAccordionArgs = Omit<
    HandleContextSetArgs,
    'accordion' | 'activeKey'
>;
