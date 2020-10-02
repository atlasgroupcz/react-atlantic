import { Type } from '../../../types';
import { ProgressProps } from '../types';

type GetProgressFillType = (value: ProgressProps['value']) => Type;
export const getProgressFillType: GetProgressFillType = (value) => {
    if (value > 75) {
        return 'success';
    }
    if (value > 50) {
        return 'primary';
    }
    if (value > 25) {
        return 'warning';
    }
    return 'error';
};
