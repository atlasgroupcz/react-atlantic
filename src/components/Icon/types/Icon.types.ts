import { IconName } from '../view';
import { CommonHTMLProps, MouseEvents } from '../../../types';

export type IconProps = {
    name: IconName;
    isRotating?: boolean;
} & CommonHTMLProps &
    MouseEvents;
