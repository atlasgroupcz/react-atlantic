import { CommonHTMLProps, MouseEvents, Type } from '../../../types';

export type MessageProps = CommonHTMLProps<HTMLDivElement> &
    MouseEvents<HTMLDivElement> & {
        type?: Type;
        isReversedColor?: boolean;
    };
