import { sameScenarion } from './sameScenario';
import { StructureArray } from './types';

export const structureArray: StructureArray = (args) => {
    const res: ReturnType<StructureArray> = [];
    sameScenarion(res, args);
    return res;
};
