export const resolveWidthFromString = (width: string): number => {
    return +width.substring(0, width.indexOf('p'));
};
