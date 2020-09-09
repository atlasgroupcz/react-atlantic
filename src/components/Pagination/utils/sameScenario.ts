import { SameScenarioType } from './types';
import { middleScenario } from './middleScenario';
import { noMiddleScenario } from './noMiddleScenario';

export const sameScenarion: SameScenarioType = (l, args) => {
    args.count === 0 ? l.push(0) : l.push(1);

    if (Math.abs(args.page - 1) >= 3 && Math.abs(args.page - args.count) >= 3) {
        middleScenario(l, args);
    } else {
        noMiddleScenario(
            Math.abs(args.page - 1) > Math.abs(args.page - args.count),
            l,
            args
        );
    }
    if (args.count !== 1 && args.count !== 0) {
        l.push(args.count);
    }
};
