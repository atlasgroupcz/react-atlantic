export type StructureArrayArgs = { count: number; page: number };
export type StructureArray = (args: StructureArrayArgs) => number[];

export type SameScenarioType = <
    T extends ReturnType<StructureArray> = ReturnType<StructureArray>
>(
    l: T,
    args: StructureArrayArgs
) => void;

export type MiddleScenarioType = SameScenarioType;

export type NoMiddleScenarioType = (
    right: boolean,
    ...args: Parameters<MiddleScenarioType>
) => void;
