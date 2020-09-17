import { ReactText } from 'react';
/**
 * @param reactKey Input differs if is explicit then looks like [.$1], implicit [.1]
 */
export const cleanReactKey = (reactKey: ReactText) => {
    if (typeof reactKey === 'number') return reactKey;
    const keyAsString = reactKey.toString();
    return keyAsString.substr(
        keyAsString.includes('$') ? 2 : 1,
        keyAsString.length
    );
};
