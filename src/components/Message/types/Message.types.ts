import { MouseEvents, Type } from '../../../types';
import { ElementProps } from '../../../types/utils';

export type MessageProps = ElementProps<HTMLDivElement> &
    MouseEvents<HTMLDivElement> & {
        type?: Type;
        isReversedColor?: boolean;
    };
