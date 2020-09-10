import { GetModifiedAlign } from './getModifiedAlign.types';
import { getAlign } from '../../getAlign';

export const getModifiedAlign: GetModifiedAlign = (
    parentAlign,
    element,
    index
) => {
    return element?.props?.align ?? getAlign(parentAlign, index);
};
