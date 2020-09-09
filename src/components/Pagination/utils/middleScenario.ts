import { SameScenarioType } from './types';

export const middleScenario: SameScenarioType = (l, { count, page }) => {
    if (true && Math.abs(page - 1) > 3) {
        l.push(-1);
    }
    for (let i = page - 2; i <= page + 2; i++) {
        l.push(i);
    }
    if (true && Math.abs(page - count) > 3) {
        l.push(-1);
    }
};
