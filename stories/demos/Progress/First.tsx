import React, { useCallback, useState } from 'react';
import { Button, Input, useInputChange } from '../../../src';
import {
    ProgressBar,
    ProgressCircle,
} from '../../../src/components/Progress/view';

export const ProgressFirstDemo = () => {
    const [value, setValue] = useState<number>(0);
    const inputProps = useInputChange({});

    const handleClick = useCallback(() => {
        setValue((old) => {
            if (old < 100) {
                return old + 1;
            }
            return old;
        });
    }, []);

    const handleReset = useCallback(() => {
        setValue(0);
    }, []);

    const handleSetProgress = useCallback(() => {
        setValue(parseInt((inputProps.value as string) ?? 0));
    }, [inputProps.value]);

    return (
        <>
            <Input {...inputProps} htmlType="number" placeholder="pls value" />
            <Button onClick={handleSetProgress} isDisabled={!inputProps?.value}>
                Skip to value
            </Button>

            <Button onClick={handleClick}>Make one more</Button>
            <Button onClick={handleReset}>Reset</Button>

            <ProgressBar value={value} />
            <ProgressCircle value={value} circleSize={100} />
        </>
    );
};
