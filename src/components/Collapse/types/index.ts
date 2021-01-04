import { PropsWithChildren } from 'react';
import { CollapseProviderProps } from '../context/types';
import { CommonHTMLProps } from '../../../types';
import { CollapseIconFactoryType } from './CollapseIconFactoryType';

export * from './CollapseIconFactoryType';

export type StyledCollapseProps = {};

export type CollapseProps = PropsWithChildren<
    CommonHTMLProps<HTMLUListElement> &
        StyledCollapseProps &
        CollapseProviderProps & {
            expandIcon?: CollapseIconFactoryType;
        }
>;
