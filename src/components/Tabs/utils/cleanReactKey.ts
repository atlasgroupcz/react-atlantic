import { ReactText } from 'react';

export const cleanReactKey = (reactKey: ReactText) => {
    if (typeof reactKey === 'number') return reactKey;
    const keyAsString = reactKey.toString();
    return keyAsString.substr(
        keyAsString.includes('$') ? 2 : 1,
        keyAsString.length
    );
};
