type Clamp = (...args: ClampArgs) => number;
type ClampArgs = [number, number, number];

export const clamp: Clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
};
