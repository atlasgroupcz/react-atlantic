import { OptionType } from '../../Select';
import { TransferProps } from '../types';

export const resolvePositionForTransfer = (
    componentWidth: number,
    rect: DOMRect,
    prefPosition: TransferProps<OptionType<string, any>>['preferredPosition']
): TransferProps<OptionType<string, any>>['preferredPosition'] => {
    if (!rect) return prefPosition;

    const { left } = rect;
    const endX = left + componentWidth;
    const startX = left - componentWidth / 2;
    const windowWidth = window.innerWidth;

    const overflowedRight = endX > windowWidth;
    const overflowedLeft = startX < 0;

    if (overflowedRight && overflowedLeft) {
        return 'bottom';
    }

    if (prefPosition === 'right' && overflowedRight && !overflowedLeft) {
        return 'left';
    }

    if (prefPosition === 'left' && overflowedLeft && !overflowedRight) {
        return 'right';
    }

    return prefPosition;
};
