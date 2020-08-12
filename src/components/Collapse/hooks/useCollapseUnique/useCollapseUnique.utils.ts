import { SetStateAction, Dispatch } from 'react';
import { isActiveKey, checkKeyFunc } from '../../Panel/utils';
import { CollapseProviderProps } from '../../context';
import { UseCollapseUniqueProps } from '.';

type HandleAccordionSet = (args: HandleWithoutAccordionArgs) => void;
type HandleNotAccordionSet = (args: HandleWithoutAccordionArgs) => void;
export type HandleContextSet = (args: HandleContextSetArgs) => void;
export type HandleContextSetArgs = Omit<
    CollapseProviderProps,
    'activeUnique' | 'onClick'
> & {
    key: string | number;
    setUnique: Dispatch<SetStateAction<CollapseProviderProps['activeUnique']>>;
};
type HandleWithoutAccordionArgs = Omit<
    HandleContextSetArgs,
    'isAccordion' | 'activeUnique'
>;

export const handleContextSet: HandleContextSet = ({
    isAccordion,
    ...args
}) => {
    if (isAccordion) {
        handleAccordionSet({ ...args });
    } else {
        handleNotAccordionSet({ ...args });
    }
};

const handleAccordionSet: HandleAccordionSet = ({ key, setUnique }) => {
    setUnique((prevState) => {
        return isActiveKey(key, prevState) ? [] : key;
    });
};

const handleNotAccordionSet: HandleNotAccordionSet = ({ setUnique, key }) => {
    setUnique((prevState) => {
        if (Array.isArray(prevState)) {
            const newArray: string[] | number[] = [...prevState] as
                | string[]
                | number[];

            const index = newArray.findIndex((item: string | number) => {
                return checkKeyFunc(item, key);
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

type GetDefaultValue = (
    isAccordion: UseCollapseUniqueProps['isAccordion'],
    defaultValue: UseCollapseUniqueProps['defaultActiveUnique']
) => CollapseProviderProps['activeUnique'];

export const getDefaultUniqueCollapseValue: GetDefaultValue = (
    isAccordion,
    defaultValue = []
) => {
    return Array.isArray(defaultValue)
        ? defaultValueArray(isAccordion, defaultValue)
        : defaultValueNotArray(isAccordion, defaultValue);
};

type ParametersGetDefaultValue = Parameters<GetDefaultValue>;
type ReturnValueGetDefaultValue = ReturnType<GetDefaultValue>;
type DefaultValueArray = (
    ...props: [ParametersGetDefaultValue[0], string[] | number[]]
) => ReturnValueGetDefaultValue;

export const defaultValueArray: DefaultValueArray = (
    isAccordion,
    defaultValue
) => {
    return isAccordion
        ? defaultValue[0] ?? ([] as string[] | number[])
        : defaultValue;
};

type DefaultValueNotArray = (
    ...props: [ParametersGetDefaultValue[0], string | number]
) => ReturnValueGetDefaultValue;

export const defaultValueNotArray: DefaultValueNotArray = (
    isAccordion,
    defaultValue
) => {
    return isAccordion ? defaultValue : ([defaultValue] as string[] | number[]);
};
