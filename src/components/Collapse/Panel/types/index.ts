import { StyledCollapseProps } from '../../types';
import { PropsWithChildren, ReactNode, ReactText } from 'react';
import { ElementProps } from '../../../../types/utils';

export type StyledPanelProps = {};

// export type PanelEventProps = FormEvents<HTMLDivElement> &
//     KeyboardEvents<HTMLDivElement> &
//     FocusEvents<HTMLDivElement> &
//     MouseEvents<HTMLDivElement>;

export type ControllerPanelProps = ElementProps<HTMLLIElement> & {
    unique: ReactText;
    header: ReactNode;
    isDisabled?: boolean;
};

export type PanelProps = PropsWithChildren<StyledCollapseProps & ControllerPanelProps>;
