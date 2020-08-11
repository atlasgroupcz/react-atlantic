import { IconName } from '../View';
import { CommonHTMLProps, MouseEvents } from '../../../types';

export type IconProps = {
    name: IconName;
    isRotating?: boolean;
} & CommonHTMLProps &
    MouseEvents;
