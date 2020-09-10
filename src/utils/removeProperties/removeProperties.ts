export const removeProperties = <T extends object, K extends (keyof T)[]>(
    obj: T,
    keys: [...K]
): Omit<T, [...K][number]> => {
    const shallow = { ...obj };
    for (const key of keys) {
        delete shallow[key];
    }
    return shallow;
};
