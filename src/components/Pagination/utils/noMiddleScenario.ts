import { NoMiddleScenarioType } from './types';

export const noMiddleScenario: NoMiddleScenarioType = (
    right,
    l,
    { count, structureSize }
) => {
    console.log('count', count);
    if (count > structureSize!) {
        console.log('first');
        if (right) {
            l.push(-1);
        }

        console.log(
            'from',
            right ? count - 4 : 2,
            'to',
            right ? 1 + 5 : structureSize! - 1,
            right
        );

        for (
            let i: number = right ? count - 4 : 2;
            i < (right ? 1 + 5 : structureSize! - 1);
            i++
        ) {
            l.push(i);
        }
        if (!right) {
            l.push(-1);
        }
    } else {
        console.log('second');
        for (let i = 2; i < count; i++) {
            l.push(i);
        }
    }
};
