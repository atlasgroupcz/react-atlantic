import { CommonHTMLProps, MouseEvents, Type } from '../../../types';

export type StyledMessageProps = CommonHTMLProps<HTMLDivElement> &
    MouseEvents<HTMLDivElement> & {
        type?: Type;
        isTransparent?: boolean;
    };
