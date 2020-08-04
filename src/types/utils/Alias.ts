export type RequiredKeys<T> = {
    [P in keyof T]-?: {} extends Pick<T, P> ? never : P;
}[keyof T];

export type OptionalKeys<T> = {
    [P in keyof T]-?: {} extends Pick<T, P> ? P : never;
}[keyof T];

export type Values<T> = T[keyof T];
export type KeyValueTupleToObject<T extends [keyof any, any]> = {
    [K in T[0]]: Extract<T, [K, any]>[1];
};

export type Alias<
    O extends {},
    K extends keyof O,
    T extends string | number | symbol
> = KeyValueTupleToObject<
    Values<
        {
            [P in RequiredKeys<O>]: [T extends K ? P : T, O[P]];
        } &
            Partial<
                {
                    [P in OptionalKeys<O>]: [T extends K ? P : T, O[P]];
                }
            >
    >
>;
