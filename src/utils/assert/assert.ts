const lastResort = {
    number: 0,
    boolean: false,
    string: '',
};

export const assertNumber = (potential?: number, otherwise?: number): number =>
    potential || otherwise || lastResort.number;

export const assertBoolean = (potential?: boolean, otherwise?: number) =>
    potential || otherwise || lastResort.boolean;

export const assertString = (potential?: string, otherwise?: string) =>
    potential || otherwise || lastResort.string;
