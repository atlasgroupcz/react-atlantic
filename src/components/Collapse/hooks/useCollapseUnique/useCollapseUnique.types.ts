import { CollapseProviderProps } from '../../context';
import { CollapseProps } from '../../types';

export type UseCollapseUniqueProps = {
    defaultActiveUnique?: CollapseProviderProps['activeUnique'];
} & Pick<CollapseProviderProps, 'isAccordion'>;
export type UseCollapseUniqueValue = Pick<
    CollapseProps,
    'activeUnique' | 'onClick'
>;
export type UseCollapseUnique = (
    props: UseCollapseUniqueProps
) => UseCollapseUniqueValue;
