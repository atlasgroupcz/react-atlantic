import { sameScenario } from './sameScenario';
import { StructureArray } from './types';

export const structureArray: StructureArray = (args) => {
    const res: ReturnType<StructureArray> = [];
    sameScenario(res, args);
    return res;
};
