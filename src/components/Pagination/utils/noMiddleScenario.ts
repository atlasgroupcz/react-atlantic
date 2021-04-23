import { NoMiddleScenarioType } from './types';

export const noMiddleScenario: NoMiddleScenarioType = (right, l, { count }) => {
    if (count > 6) {
        if (right) {
            l.push(-1);
        }
        for (
            let i: number = right ? count - 4 : 2;
            i < (right ? count : 1 + 5);
            i++
        ) {
            l.push(i);
        }
        if (!right) {
            l.push(-2);
        }
    } else {
        for (let i = 2; i < count; i++) {
            l.push(i);
        }
    }
};
