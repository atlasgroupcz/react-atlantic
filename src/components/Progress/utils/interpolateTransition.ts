import { useMemo } from 'react';
import { useTheme } from '../../../styled';

export const interpolateTransition = (
    value: number,
    transistionValues: string[],
    maxValue = 100
) => {
    // Retuns last element
    if (value === maxValue)
        return transistionValues[transistionValues.length - 1];

    const mappingScale = transistionValues.length / maxValue;
    return transistionValues[Math.floor(value * mappingScale)];
};

export const useDefaultInterpolateTransitionValues = () => {
    const theme = useTheme();
    return useMemo(
        () => [
            theme.color.error.alpha,
            theme.color.warning.alpha,
            theme.color.success.alpha,
        ],
        [theme]
    );
};
