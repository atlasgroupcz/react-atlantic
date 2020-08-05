export type WithoutChildren<T extends {}> = {
    children?: undefined;
} & T;
