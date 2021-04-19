import { SameScenarioType } from './types';
import { middleScenario } from './middleScenario';
import { noMiddleScenario } from './noMiddleScenario';

export const sameScenarion: SameScenarioType = (l, args) => {
    if (args.count === 0) {
        l.push(0);
    } else {
        l.push(1);

        console.log(args, Math.abs(args.page - args.count));
        const a = args.structureSize! - 2;

        const isMiddleScenario =
            Math.abs(args.page - 1) >= a &&
            Math.abs(args.page - args.count) >= a;

        console.log(
            Math.abs(args.page - 1),
            Math.abs(args.page - args.count),
            a
        );

        if (isMiddleScenario) {
            console.log(`Middle`);
            middleScenario(l, args);
        } else {
            console.log(`noMiddle`);
            noMiddleScenario(
                Math.abs(args.page - 1) > Math.abs(args.page - args.count),
                l,
                args
            );
        }
        if (args.count !== 1) {
            l.push(args.count);
        }
    }
};
