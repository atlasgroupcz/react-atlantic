import { IconName } from '../view/IconsMap';
import { CommonHTMLProps, MouseEvents } from '../../../types';

export type IconProps = {
    name: IconName;
    isRotating?: boolean;
} & CommonHTMLProps &
    MouseEvents;
