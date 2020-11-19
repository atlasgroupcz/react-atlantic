export type InnerRef<T extends { ref?: any }> = Omit<T, 'ref'> & {
    innerRef?: T['ref'];
};
