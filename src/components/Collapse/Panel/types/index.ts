import { CommonHTMLProps } from '../../../../types';
import { StyledCollapseProps } from '../../types';
import { PropsWithChildren, ReactNode, ReactText } from 'react';

export type StyledPanelProps = {};

// export type PanelEventProps = FormEvents<HTMLDivElement> &
//     KeyboardEvents<HTMLDivElement> &
//     FocusEvents<HTMLDivElement> &
//     MouseEvents<HTMLDivElement>;

export type ControllerPanelProps = CommonHTMLProps<HTMLLIElement> & {
    unique: ReactText;
    header: ReactNode;
    isDisabled?: boolean;
};

export type PanelProps = PropsWithChildren<
    StyledCollapseProps & ControllerPanelProps
>;
