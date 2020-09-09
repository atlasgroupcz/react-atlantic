import { NoMiddleScenarioType } from './types';

export const noMiddleScenario: NoMiddleScenarioType = (
    right,
    l,
    { count, page }
) => {
    if (count > 6) {
        if (right && true) {
            l.push(-1);
        }
        for (
            let i: number = right ? count - 4 : 2;
            i < (right ? count : 1 + 5);
            i++
        ) {
            l.push(i);
        }
        if (!right && true) {
            l.push(-1);
        }
    } else {
        for (let i = 2; i < count; i++) {
            l.push(i);
        }
    }
};
