import { IconName } from '../view/IconsMap';
import { MouseEvents } from '../../../types';
import { ElementProps } from '../../../types/utils';

export type IconProps = {
    name: IconName;
    isRotating?: boolean;
} & ElementProps &
    MouseEvents;
