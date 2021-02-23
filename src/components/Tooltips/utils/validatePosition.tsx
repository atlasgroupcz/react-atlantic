import { CSSPosition } from '../types/CSSPosition';

export const validatePosition = (string: string | undefined | null) =>
    ['left', 'right', 'top', 'bottom'].includes(string as any)
        ? (string as CSSPosition)
        : undefined;
