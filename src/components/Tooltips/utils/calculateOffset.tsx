import { CSSPosition } from '../types/CSSPosition';

export const calculateOffset = (el: HTMLElement, position: CSSPosition) => {
    const isLeftRight = ['left', 'right'].includes(position);

    if (isLeftRight) return el.clientHeight / 2;
    return el.clientWidth / 2;
};
