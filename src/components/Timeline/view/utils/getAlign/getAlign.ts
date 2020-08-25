import { GetAlignTimeline } from './getAlign.types';

export const getAlign: GetAlignTimeline = (align, i) => {
    if (align === 'alternate') {
        return i % 2 === 0 ? 'right' : 'left';
    }
    return align;
};
