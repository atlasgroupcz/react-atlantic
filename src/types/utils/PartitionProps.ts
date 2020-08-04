/**
 * Creates two types: `main` and `rest` from two given types, passes selected props from `rest` to the `main` and excludes them from `rest`
 **/
export type PartitionProps<
    MainProps extends {},
    RestProps extends {},
    PropsToMove extends keyof RestProps
> = {
    main: MainProps & Pick<RestProps, PropsToMove>;
    rest: Omit<RestProps, PropsToMove>;
};
