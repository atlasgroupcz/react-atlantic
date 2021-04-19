import { SameScenarioType } from './types';

export const middleScenario: SameScenarioType = (
    l,
    { count, page, structureSize }
) => {
    const a = structureSize! - 3;

    if (Math.abs(page - 1) > a) {
        l.push(-1);
    }
    for (let i = page - (a - 1); i <= page + (a + 1); i++) {
        l.push(i);
    }
    if (Math.abs(page - count) > a) {
        l.push(-1);
    }
};
