import { PropsWithChildren } from 'react';
import { CollapseProviderProps } from '../context/types';
import { CollapseIconFactoryType } from './CollapseIconFactoryType';
import { ElementProps } from '../../../types/utils';

export * from './CollapseIconFactoryType';

export type StyledCollapseProps = {};

export type CollapseProps = PropsWithChildren<
    Omit<ElementProps<HTMLUListElement>, 'onClick'> &
        StyledCollapseProps &
        CollapseProviderProps & {
            expandIcon?: CollapseIconFactoryType;
        }
>;
