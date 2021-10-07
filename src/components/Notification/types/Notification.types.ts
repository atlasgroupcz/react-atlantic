import { CommonHTMLProps, MouseEvents, Type } from '../../../types';

export type NotificationProps = CommonHTMLProps<HTMLDivElement> &
    MouseEvents<HTMLDivElement> & {
        type?: Type;
    };
