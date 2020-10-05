import React, { useState } from 'react';
import { Button } from '../../../src';
import {
    ProgressBar,
    ProgressCircle,
} from '../../../src/components/Progress/view';

export const ProgressFirstDemo = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <>
            <Button onClick={() => setValue((old) => (old + 1) % 100)}>
                Make one more
            </Button>
            <ProgressBar value={value} />
            <ProgressCircle value={value} />
        </>
    );
};
