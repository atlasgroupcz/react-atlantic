import { ControllerPanelProps } from '../types';
import { CollapseProviderProps } from '../../context';

export const checkKeyFunc = (key1: string | number, key2: string | number) => {
    return `${key1}` === `${key2}`;
};
export const isActiveKey: IsActiveKeyType = (key, activeKey) => {
    const handleSome = (item: string | number) => checkKeyFunc(item, key);
    return Array.isArray(activeKey)
        ? activeKey.some(handleSome)
        : checkKeyFunc(key, activeKey);
};
export type IsActiveKeyType = (
    key: ControllerPanelProps['unique'],
    activeKey: CollapseProviderProps['activeUnique']
) => boolean;
