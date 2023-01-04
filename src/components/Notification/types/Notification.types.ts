import { MouseEvents, Type } from '../../../types';
import { ElementProps } from '../../../types/utils';

export type NotificationProps = ElementProps<HTMLDivElement> &
    MouseEvents<HTMLDivElement> & {
        type?: Type;
    };
